import {RequestState} from '../request/requestStateModels';
import {Employee} from "../employee/employeeModels";

export interface LoginState {
    requestState: RequestState,
    loggedInUser?: Employee;
}
