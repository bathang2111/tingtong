import { createSlice } from "@reduxjs/toolkit";

const FeedBack = createSlice({
  name: "feedback",
  initialState: {
    feedBackStatus: false,
    Tutor: {},
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
    setInfoTutor: (state, action) => {
      state.Tutor = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = FeedBack;
export const { OpenFeedBackLobby, CloseFeedBackLobby, setInfoTutor } = actions;
export default reducer;
