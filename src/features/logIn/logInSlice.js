import { createSlice } from "@reduxjs/toolkit";

const login = createSlice({
    name: 'login',
    initialState: {
        useName: null,
        password: null
    },
    reducers: {
        submitLogin: (state, action) => {
            // xu ly dang nhap tai day
        }
    }
});

const { reducer, actions } = login;
export const { submitLogin } = actions;
export default reducer;
