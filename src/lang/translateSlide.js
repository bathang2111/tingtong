import { createSlice } from "@reduxjs/toolkit";
import Translations from "./translations"

const vn = Translations.vn;
const en = Translations.en;

const Language = createSlice({
  name: "language",
  initialState: localStorage.getItem("lang") == "vn" ? vn : en,
  reducers: {
    ChangeLanguageVietNam: (state) => {
      state = vn;
      return state;
    },
    ChangeLanguageEnglish: (state) => {
      state = en;
      return state;
    }
  },
});

const { reducer, actions } = Language;
export const { ChangeLanguageVietNam, ChangeLanguageEnglish } = actions;
export default reducer;
