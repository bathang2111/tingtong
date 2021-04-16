import { createSlice } from "@reduxjs/toolkit";

const HomePage = createSlice({
  name: "homePage",
  initialState: { toggleModal: false,idTutor:'' },
  reducers: {
    ToggleProfileModal: (state) => {
      state.toggleModal = !state.toggleModal;
      return state;
    },
    TutorIdDetail:(state,action)=>{
      state.idTutor=action.payload;
      return state;
    }
  },
});

const { reducer, actions } = HomePage;
export const {ToggleProfileModal,TutorIdDetail} = actions;
export default reducer;
