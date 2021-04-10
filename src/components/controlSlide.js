import { createSlice } from "@reduxjs/toolkit";

const ControlApp = createSlice({
  name: "control",
  initialState: {
    SmallScreenHeaderStatus: false,
  },
  reducers: {
    ToggleSmallScreen: (state) => {
      state.SmallScreenHeaderStatus = !state.SmallScreenHeaderStatus;
      return state;
    },
  },
});

const { reducer, actions } = ControlApp;
export const { ToggleSmallScreen } = actions;
export default reducer;
