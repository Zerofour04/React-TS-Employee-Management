import {createSlice} from '@reduxjs/toolkit';
import {LoginState} from './loginModels';

const initialState: LoginState = {
    requestState: {
        isLoading: false,
        errorMessage: null
    }
};

const loginSlice = createSlice({
    name: 'login',
    initialState: initialState,
    reducers: {
        setLoggedInUser(state, action) {
            state.loggedInUser = action.payload;
        },
        setLoading(state, action) {
            state.requestState.isLoading = action.payload;
        },
        setErrorMessage(state, action) {
            state.requestState.errorMessage = action.payload;
        },
    }
});

export default loginSlice;


