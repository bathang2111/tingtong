import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../api/authApi";

export const getAuthLogin = createAsyncThunk("auth/Login", async (params, thunAPI) => {
  const user = await AuthApi.Login(params);
  return user;
});

const Login = createSlice({
  name: "login",
  initialState: {
    auth: {},
    checkLogin: localStorage.getItem("idUser") ? true : false,
  },
  reducers: {
    isLoginOn: (state) => {
      state.checkLogin = true;
      return state;
    },
  },
  extraReducers: {
    [getAuthLogin.pending]: () => {},
    [getAuthLogin.rejected]: () => {},
    [getAuthLogin.fulfilled]: (state, action) => {
      state.auth = action.payload;
    },
  },
});

const { reducer, actions } = Login;
export const { isLoginOn } = actions;
export default reducer;
