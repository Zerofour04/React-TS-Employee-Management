import {RequestState} from '../request/requestStateModels';

export interface UserRoleState {
    requestState: RequestState,
    userRoles: string[];
}
