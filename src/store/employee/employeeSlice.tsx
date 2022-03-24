import {createSlice} from '@reduxjs/toolkit';
import {Employee, EmployeeState} from './employeeModels';


const initialState: EmployeeState = {
    initialized: false,
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
            const loadedEmployees: Employee[] = action.payload.employees;
            const loggedInUser: Employee = action.payload.loggedInUser;
            state.employees = loadedEmployees;
            state.loggedInUser = loggedInUser;
            state.initialized = loggedInUser && loadedEmployees.length > 0;
        },
        setLoading(state, action) {
            state.requestState.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.requestState.errorMessage = action.payload;
        },
    }
});

export default employeeSlice;


