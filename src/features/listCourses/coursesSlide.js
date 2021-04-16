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
  initialState: {
    curriculums: [],
    listCoursesWhenSearch: [],
    courseDetail: {},
    loading: false,
    error: false,
  },
  reducers: {
    setCourseDetail: (state, action) => {
      state.courseDetail = action.payload;
      return state;
    },
  },
  extraReducers: {
    [getCourses.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getCourses.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      return state;
    },
    [getCourses.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
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
export const { setCourseDetail } = actions;
export default reducer;
