import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Notification = createSlice({
  name: "Notification",
  initialState: {
    isOpen: false,
    listNoti: [],
  },
  reducers: {
    ToggleLobby: (state) => {
      state.isOpen = !state.isOpen;
      return state;
    },
    PushNotification: (state, action) => {
      state.listNoti.push(action.payload);
    },
  },
});

const { reducer, actions } = Notification;
export const { ToggleLobby,PushNotification } = actions;
export default reducer;
