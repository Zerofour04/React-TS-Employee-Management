import axios from 'axios';
import { loginActions, userRoleActions } from '../index';


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
