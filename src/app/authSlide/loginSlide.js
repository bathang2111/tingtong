import { createSlice } from "@reduxjs/toolkit";

const Login = createSlice({
  name: "loginStatus",
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
});

const { reducer, actions } = Login;
export const { isLoginOn } = actions;
export default reducer;
