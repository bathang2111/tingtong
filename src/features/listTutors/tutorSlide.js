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
      return state;
    },

    [getTutorsByKeyWord.pending]: (state) => {},
    [getTutorsByKeyWord.rejected]: (state, action) => {},
    [getTutorsByKeyWord.fulfilled]: (state, action) => {
      state.listTutorsWhenSearch = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = ListTutors;
export const { checkTutorOnline } = actions;
export default reducer;
