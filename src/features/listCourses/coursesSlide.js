import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CurriculumsApi from "../../api/curiculumsApi";
export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async (params, thunkAPI) => {
    const curriculums = await CurriculumsApi.getCurriculums();
    return curriculums;
  }
);

const Listcourses = createSlice({
  name: "listcourses",
  initialState: [],
  reducers: {},
  extraReducers: {
    [getCourses.pending]: (state) => {},
    [getCourses.rejected]: (state, action) => {},
    [getCourses.fulfilled]: (state, action) => {
      state = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = Listcourses;
export const {} = actions;
export default reducer;
