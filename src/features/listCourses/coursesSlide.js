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
    isOpenSlide: false,
    noResult: false,
  },
  reducers: {
    setCourseDetail: (state, action) => {
      state.courseDetail = action.payload;
      return state;
    },
    TogglePopUpSlide: (state) => {
      state.isOpenSlide = !state.isOpenSlide;
      return state;
    },
    RemoveNoResult: (state) => {
      state.noResult = false;
      state.listCoursesWhenSearch = [];
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
      state.curriculums = action.payload.list;
      return state;
    },

    [getCoursesByKeyWord.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getCoursesByKeyWord.rejected]: (state, action) => {},
    [getCoursesByKeyWord.fulfilled]: (state, action) => {
      if (action.payload.length == 0) {
        state.noResult = true;
        return state;
      }
      state.listCoursesWhenSearch = action.payload;
      state.loading = false;
      return state;
    },
  },
});

const { reducer, actions } = Listcourses;
export const { setCourseDetail, TogglePopUpSlide, RemoveNoResult } = actions;
export default reducer;
