import {createSlice} from '@reduxjs/toolkit';
import { UserRoleState} from './userRoleModels';

const initialState: UserRoleState = {
    requestState: {
        isLoading: false,
        errorMessage: null
    },
    userRoles: []
};

const userRoleSlice = createSlice({
    name: 'userrole',
    initialState: initialState,
    reducers: {
        setLoading(state, action) {
            state.requestState.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.requestState.errorMessage = action.payload;
        },
        setUserRole(state, action) {
            state.userRoles = action.payload;
        }
    }
});

export default userRoleSlice;


