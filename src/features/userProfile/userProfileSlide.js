import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import AuthApi from "../../api/authApi";
import DefaultAvatar from "../../assets/images/avatar4.png";

export const getUserInfo = createAsyncThunk(
  "user/getUserInfo",
  async (params, thunkAPI) => {
    const response = await AuthApi.getUserInfo();
    return response;
  }
);

const UserProfile = createSlice({
  name: "userProfile",
  initialState: { changeAvatar: false, image: DefaultAvatar, userInfo: {} },
  reducers: {
    ChangeAvatar: (state) => {
      state.changeAvatar = !state.changeAvatar;
      return state;
    },
    SaveAvatar: (state, action) => {
      state.image = action.payload;
      return state;
    },
  },
  extraReducers: {
    [getUserInfo.pending]: (state) => {},
    [getUserInfo.rejected]: () => {},
    [getUserInfo.fulfilled]: (state, action) => {
      state.userInfo = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = UserProfile;
export const { ChangeAvatar, SaveAvatar } = actions;
export default reducer;
