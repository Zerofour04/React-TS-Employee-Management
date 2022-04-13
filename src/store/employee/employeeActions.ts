import axios from 'axios';
import {employeeActions} from '../index';
import {Employee} from './employeeModels';


export const loadEmployees = (headers: any) => {
        return async (dispatch: any) => {
            const fetchEmployees = async () => {
                return await axios.get(
                    `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v2/employees`,
                    {
                        headers: headers,
                        params: {
                            size: 1000,
                            page: 0
                        }
                    });
            };

            dispatch(employeeActions.setLoading(true));
            try {
                const employeeResponse = await fetchEmployees();
                const employees: Employee[] = employeeResponse.data.content;
                employees.forEach(employee => employee.displayName = concatEmployeeNameAndAcronym(employee.fullName, employee.acronym));
                dispatch(employeeActions.setInitialData(employees));
            } catch (error: any) {
                dispatch(employeeActions.setErrorMessage(`Employees: ${error.message}`));
            } finally {
                dispatch(employeeActions.setLoading(false));
            }
        };
    }
;

export const loadEmployee = (headers: any, email: string) => {
    return async (dispatch: any) => {
        const fetchEmployee = async () => {
            return await axios.get(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/employees/${email}`,
                {
                    headers: headers
                });
        };

        dispatch(employeeActions.setLoading(true));
        try {
            const employeeResponse = await fetchEmployee();
            const employee: Employee = employeeResponse.data;
            employee.displayName = concatEmployeeNameAndAcronym(employee.fullName, employee.acronym);
            dispatch(employeeActions.setEmployee(employee));
        } catch (error: any) {
            dispatch(employeeActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(employeeActions.setLoading(false));
        }
    };
}
;

function concatEmployeeNameAndAcronym(fullName: string | null, acronym: string | null) {
    const name = fullName ? fullName : 'Unnamed';
    return acronym ? name.concat(' (').concat(acronym).concat(')') : name;
}
