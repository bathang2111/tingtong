import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import TutorsApi from "../../api/tutorsApi";

export const getTutors = createAsyncThunk(
  "tutors/getTutors",
  async (params, thunkAPI) => {
    const tutors = await TutorsApi.getTutors();
    return tutors;
  }
);

export const getTutorsByKeyWord = createAsyncThunk(
  "courses/getTutorsByKeyWord",
  async (params, thunkAPI) => {
    const Tutors = await TutorsApi.getTutorsByKeyWord(params);
    return Tutors;
  }
);

const ListTutors = createSlice({
  name: "listTutors",
  initialState: {
    listTutors: [],
    listTutorsWhenSearch: [],
    loading: false,
    error: false,
    status: false,
    noResult: false,
  },
  reducers: {
    checkTutorOnline: (state, action) => {
      state.listTutors.map((a) => {
        if (a.id == action.payload) {
          a.isOnline = true;
          return;
        }
      });
      state.listTutors.sort((a, b) => {
        return b.isOnline - a.isOnline;
      });
    },
    SendStatusLike: (state, action) => {
      state.status = action.payload;
      return state;
    },
    RemoveNoResult: (state) => {
      state.listTutorsWhenSearch = [];
      state.noResult = false;
      return state;
    },
  },
  extraReducers: {
    [getTutors.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getTutors.rejected]: (state, action) => {
      state.loading = false;
      state.error = true;
      return state;
    },
    [getTutors.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      state.listTutors = action.payload;
      state.listTutors.sort((a, b) => {
        return b.isOnline - a.isOnline;
      });
      return state;
    },

    [getTutorsByKeyWord.pending]: (state) => {
      state.loading = true;
      return state;
    },
    [getTutorsByKeyWord.rejected]: (state, action) => {},
    [getTutorsByKeyWord.fulfilled]: (state, action) => {
      state.loading = false;
      state.error = false;
      if (action.payload.length == 0) {
        state.noResult = true;
        return state;
      }
      state.listTutorsWhenSearch = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = ListTutors;
export const { checkTutorOnline, SendStatusLike, RemoveNoResult } = actions;
export default reducer;
