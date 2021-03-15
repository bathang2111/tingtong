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
  initialState: {listTutors:[],listTutorsWhenSearch:[]},
  reducers: {},
  extraReducers: {
    [getTutors.pending]: (state) => {},
    [getTutors.rejected]: (state, action) => {},
    [getTutors.fulfilled]: (state, action) => {
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

const {reducer,actions}=ListTutors;
export const {}=actions;
export default reducer;