import { createSlice } from "@reduxjs/toolkit";

const FeedBack = createSlice({
  name: "feedback",
  initialState: {
    feedBackStatus: false,
  },
  reducers: {
    OpenFeedBackLobby: (state) => {
      state.feedBackStatus = true;
      return state;
    },
    CloseFeedBackLobby: (state) => {
      state.feedBackStatus = false;
      return state;
    },
  },
});

const { reducer, actions } = FeedBack;
export const { OpenFeedBackLobby, CloseFeedBackLobby } = actions;
export default reducer;
