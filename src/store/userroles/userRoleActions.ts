import axios from 'axios';
import { loadEmployee } from '../employee/employeeActions';
import {  userRoleActions } from '../index';

export const getUserRoles = (headers: any) => {
    return async (dispatch: any) => {
        const fetchUserRoles = async () => {
            return await axios.get(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/userroles`,
                {
                    headers: headers
                });
        };

        dispatch(userRoleActions.setLoading(true));
        try {
            const userRoleResponse = await fetchUserRoles();
            dispatch(userRoleActions.setUserRole(userRoleResponse.data));
        } catch (error: any) {
            dispatch(userRoleActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(userRoleActions.setLoading(false));
        }
    };
};


export const setUserRoles = (headers: any) => {
    return async (dispatch: any) => {
        const putUserRoles = async () => {
            return await axios.put(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/employees/ddhubadmin@dialogdata.de/groups/sales-manager`,
                {
                    headers: headers
                });
        };

        dispatch(userRoleActions.setLoading(true));
        try {
            const userRoleResponse = await putUserRoles();
            dispatch(userRoleActions.setUserRole(userRoleResponse.data));
        } catch (error: any) {
            dispatch(userRoleActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(userRoleActions.setLoading(false));
        }
    };
};

export const removeUserRole = ( headers: any, email:string, key:string) => {
    return async (dispatch: any) => {
        const deleteUserRole = async () => {
            const response = await axios.delete(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/employees/${email}/groups/${key}`,
                {
                    headers: headers
                });
                return response.data
        };

        console.log('Role removed', {key})

        dispatch(userRoleActions.setLoading(true));
        try {
            const userRoleResponse = await deleteUserRole();
           dispatch(loadEmployee(headers, email))
            
        } catch (error: any) {
            dispatch(userRoleActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(userRoleActions.setLoading(false));
        }
    };
}; 

export const addUserRole = ( headers: any, email:string, key:string) => {
    return async (dispatch: any) => {
        const addUserRole = async () => {
            const response = await axios.put(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/employees/${email}/groups`,
                {
                    groupId: key
                },
                {
                    headers: headers
                });
                return response.data
        };

        console.log('Role added', {key})

        dispatch(userRoleActions.setLoading(true));
        try {
            const userRoleResponse = await addUserRole();
           dispatch(loadEmployee(headers, email))
            
        } catch (error: any) {
            dispatch(userRoleActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(userRoleActions.setLoading(false));
        }
    };
}; 
/* export const deleteUserRoles = (headers: any, key: number) => {
    return async (dispatch: any, getState: any) => {
        const deleteUserRoles = async () => {
            const response = await axios.delete(
                    `${window._env_?.MISSIONASSIGNMENTS_SERVICE_EXTERNAL_URL}/api/v1/employees/ddhubadmin@dialogdata.de/groups/sales-manager`,
                    {
                        headers: headers
                    });
            return response.data;
        };
        dispatch(userRoleActions.setLoading(true));
        try {
            await deleteUserRoles();
        } catch (error:any) {
            dispatch(userRoleActions.setErrorMessage(`Missionassignment Service: ${error.message}`));
        } finally {
            dispatch(userRoleActions.setLoading(false));
        }
    };
}; */