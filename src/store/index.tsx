import {EmployeeState} from "./employee/employeeModels";
import employeeSlice from "./employee/employeeSlice";
import {configureStore} from "@reduxjs/toolkit";
import {LoginState} from "./login/loginModels";
import loginSlice from "./login/loginSlice";

export interface RootState {
    loginState: LoginState;
    employeeState: EmployeeState;
}

const store = configureStore({
    reducer: {
        loginState: loginSlice.reducer,
        employeeState: employeeSlice.reducer,
    }
});

export const employeeActions = employeeSlice.actions;
export const loginActions = loginSlice.actions;

export default store;
