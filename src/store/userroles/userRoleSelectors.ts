import {RootState} from '../index';

export const selectIsLoginLoading = (state: RootState): boolean => {
    return state.userRoleState.requestState.isLoading;
};

export const selectLoginErrorMessage = (state: RootState): string | null => {
    return state.userRoleState.requestState.errorMessage;
};

export const selectUserRoles = (state: RootState): string[] => {
    return state.userRoleState.userRoles;
}

export const setUserRoles = (state: RootState): string[] => {
    return state.userRoleState.userRoles;
}

export const removeUserRole = (state: RootState): string[] => {
    return state.userRoleState.userRoles;
}

