import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TutorsApi from "../../api/tutorsApi";

export const getTutors = createAsyncThunk(
  "tutors/getTutors",
  async (params, thunkAPI) => {
    const tutors = await TutorsApi.getTutors();
    return tutors;
  }
);

const ListTutors = createSlice({
  name: "listTutors",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getTutors.pending]: (state) => {},
    [getTutors.rejected]: (state, action) => {},
    [getTutors.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const {reducer,actions}=ListTutors;
export const {}=actions;
export default reducer;