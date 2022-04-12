import {RootState} from '../index';
import {Employee} from "../employee/employeeModels";

export function selectLoggedInUser(state: RootState): Employee | undefined {
    return state.loginState.loggedInUser;
}

export const selectIsLoginLoading = (state: RootState): boolean => {
    return state.loginState.requestState.isLoading;
};

export const selectLoginErrorMessage = (state: RootState): string | null => {
    return state.loginState.requestState.errorMessage;
};
