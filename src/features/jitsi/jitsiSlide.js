import { createSlice } from "@reduxjs/toolkit";

const JitSi = createSlice({
  name: "jitsi",
  initialState: {
    LobbyRequestCallStatus: false,
    LobbyReceiveCallStatus: false,
    CallerStatus: false,
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
    SetCallerStatus: (state) => {
      state.CallerStatus = true;
      return state;
    },
  },
});

const { reducer, actions } = JitSi;
export const {
  OpenRequestLobby,
  CloseRequestLobby,
  OpenReceiveLobby,
  CloseReceiveLobby,
  SetCallerStatus,
} = actions;
export default reducer;
