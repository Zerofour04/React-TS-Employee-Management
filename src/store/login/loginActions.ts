import axios from 'axios';
import {loginActions} from '../index';

export const login = (headers: any, email: string) => {
    return async (dispatch: any) => {
        const fetchLoggedInUser = async () => {
            return await axios.get(
                `${window._env_?.EMPLOYEE_SERVICE_EXTERNAL_URL}/api/v1/protectedemployees/${email}`,
                {
                    headers: headers
                });
        };

        dispatch(loginActions.setLoading(true));
        try {
            const loggedInUserResponse = await fetchLoggedInUser();
            dispatch(loginActions.setLoggedInUser(loggedInUserResponse.data));
        } catch (error: any) {
            dispatch(loginActions.setErrorMessage(`Employees: ${error.message}`));
        } finally {
            dispatch(loginActions.setLoading(false));
        }
    };
};
