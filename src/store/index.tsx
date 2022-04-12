import {EmployeeState} from "./employee/employeeModels";
import employeeSlice from "./employee/employeeSlice";
import {configureStore} from "@reduxjs/toolkit";
import {LoginState} from "./login/loginModels";
import loginSlice from "./login/loginSlice";
import { UserRoleState } from "./userroles/userRoleModels";
import userRoleSlice from "./userroles/userRoleSlice";

export interface RootState {
    loginState: LoginState;
    employeeState: EmployeeState;
    userRoleState: UserRoleState
}

const store = configureStore({
    reducer: {
        loginState: loginSlice.reducer,
        employeeState: employeeSlice.reducer,
        userRoleState: userRoleSlice.reducer,
    }
});

export const employeeActions = employeeSlice.actions;
export const loginActions = loginSlice.actions;
export const userRoleActions = userRoleSlice.actions;
export default store;
