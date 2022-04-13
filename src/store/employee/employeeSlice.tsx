import { createSlice } from '@reduxjs/toolkit';
import { EmployeeState } from './employeeModels';
import { Employee } from './employeeModels';


const initialState: EmployeeState = {
    employees: [],
    requestState: {
        isLoading: false,
        errorMessage: null
    }
};

const employeeSlice = createSlice({
    name: 'employees',
    initialState: initialState,
    reducers: {
        setInitialData(state, action) {
            state.employees = action.payload;
        },
        setLoading(state, action) {
            state.requestState.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.requestState.errorMessage = action.payload;
        },
        setSelectedEmployee(state, action) {
            state.selectedEmployee = action.payload;
        },
        setEmployee(state, action) {
            const employee: Employee = action.payload
            const employeeFound = state.employees.filter(e => e.email !== employee.email)
            employeeFound.push(employee)
            employeeFound.sort((a: Employee, b: Employee) => a.email.localeCompare(b.email))
            state.employees = employeeFound;
            if (state.selectedEmployee?.email === employee.email) { state.selectedEmployee = employee }
        }

    }
});

export default employeeSlice;


