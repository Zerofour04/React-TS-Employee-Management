import {useSelector} from 'react-redux';
import {hasAnyRole} from '../../functions/AuthorizationTools';
import {selectLoggedInUser} from "../../store/login/loginSelectors";

const useAuthorization = (...permittedRoles: string[]): boolean => {
    const employee = useSelector(selectLoggedInUser);
    return hasAnyRole(employee, ...permittedRoles);
};

export default useAuthorization;
