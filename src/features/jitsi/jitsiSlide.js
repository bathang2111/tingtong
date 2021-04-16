import { createSlice } from "@reduxjs/toolkit";

const JitSi = createSlice({
  name: "jitsi",
  initialState: {
    LobbyRequestCallStatus: false,
    LobbyReceiveCallStatus: false,
    CallerStatus: false,
    InfoTutor: {},
  },
  reducers: {
    OpenRequestLobby: (state) => {
      state.LobbyRequestCallStatus = true;
      return state;
    },
    CloseRequestLobby: (state) => {
      state.LobbyRequestCallStatus = false;
      return state;
    },
    OpenReceiveLobby: (state) => {
      state.LobbyReceiveCallStatus = true;
      return state;
    },
    CloseReceiveLobby: (state) => {
      state.LobbyReceiveCallStatus = false;
      return state;
    },
    CallerStatusTrue: (state) => {
      state.CallerStatus = true;
      return state;
    },
    CallerStatusFalse: (state) => {
      state.CallerStatus = false;
      return state;
    },
    SetTutorsReceive: (state, action) => {
      state.InfoTutor = action.payload;
      return state;
    }
  },
});

const { reducer, actions } = JitSi;
export const {
  OpenRequestLobby,
  CloseRequestLobby,
  OpenReceiveLobby,
  CloseReceiveLobby,
  CallerStatusTrue,
  CallerStatusFalse,
  SetTutorsReceive,
} = actions;
export default reducer;
