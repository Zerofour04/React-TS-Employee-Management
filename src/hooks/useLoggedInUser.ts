import {useWebservice} from "./useWebservice";
import {login} from "../store/login/loginActions";
import {useMsal} from "@azure/msal-react";

export const useLoggedInUser = () => {
    const context = useMsal();
    const email = context?.accounts[0].username;
    useWebservice(email !== undefined, login, email)
}
