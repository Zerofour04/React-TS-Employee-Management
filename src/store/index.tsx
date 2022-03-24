
import { EmployeeState } from "./employee/employeeModels";
import employeeSlice from "./employee/employeeSlice";
import { configureStore } from "@reduxjs/toolkit";

export interface RootState {
    employeeState: EmployeeState;
}

const store = configureStore({
    reducer: {
        employeeState: employeeSlice.reducer,
    }
});

export const employeeActions = employeeSlice.actions;

export default store;
