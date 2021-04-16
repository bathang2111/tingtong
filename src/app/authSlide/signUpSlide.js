import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../api/authApi";

export const getAuthSignUp = createAsyncThunk(
  "auth/signUp",
  async (params, thunAPI) => {
    const user = await AuthApi.SignUp(params);
    return user;
  }
);

const SignUp = createSlice({
  name: "signup",
  initialState: {},
  reducers: {},
  extraReducers: {
    [getAuthSignUp.pending]: () => {},
    [getAuthSignUp.rejected]: () => {},
    [getAuthSignUp.fulfilled]: (state, action) => {
      state = action.payload;
    },
  },
});

const { reducer, actions } = SignUp;
export const { isLoginOn } = actions;
export default reducer;
