import {RootState} from '../index';
import {Employee} from './employeeModels';

export const selectEmployees = (state: RootState): Employee[] => {
    return state.employeeState.employees;
};

export const selectIsEmployeesLoading = (state: RootState): boolean => {
    return state.employeeState.requestState.isLoading;
};

export const selectIsEmployeesErrorMessage = (state: RootState): string | null => {
    return state.employeeState.requestState.errorMessage;
};

export const selectSelectedEmployee = (state: RootState): Employee | undefined => {
    return state.employeeState.selectedEmployee;
};

