import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import CurriculumsApi from "../../api/curiculumsApi";
export const getCourses = createAsyncThunk(
  "courses/getCourses",
  async (params, thunkAPI) => {
    const curriculums = await CurriculumsApi.getCurriculums();
    return curriculums;
  }
);

export const getCoursesByKeyWord = createAsyncThunk(
  "courses/getCoursesByKeyWord",
  async (params, thunkAPI) => {
    const courses = await CurriculumsApi.getCoursesByKeyWord(params);
    return courses;
  }
);

const Listcourses = createSlice({
  name: "listcourses",
  initialState: { curriculums: [], listCoursesWhenSearch: [] },
  reducers: {},
  extraReducers: {
    [getCourses.pending]: (state) => {},
    [getCourses.rejected]: (state, action) => {},
    [getCourses.fulfilled]: (state, action) => {
      state.curriculums = action.payload;
      return state;
    },

    [getCoursesByKeyWord.pending]: (state) => {},
    [getCoursesByKeyWord.rejected]: (state, action) => {},
    [getCoursesByKeyWord.fulfilled]: (state, action) => {
      state.listCoursesWhenSearch = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = Listcourses;
export const {} = actions;
export default reducer;
