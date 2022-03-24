import {RootState} from '../index';
import {Employee} from './employeeModels';


export function selectInitialization(state: RootState): boolean {
    return state.employeeState.initialized;
}

export function selectLoggedInUser(state: RootState): Employee | undefined {
    return state.employeeState.loggedInUser;
}

export const selectEmployees = (state: RootState): Employee[] => {
    return state.employeeState.employees;
};

export const selectIsEmployeesLoading = (state: RootState): boolean => {
    return state.employeeState.requestState.isLoading;
};

export const selectIsEmployeesErrorMessage = (state: RootState): string | null => {
    return state.employeeState.requestState.errorMessage;
};