import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";

const Payment = createSlice({
  name: "payment",
  initialState: { timePackage: {}, price: 0 },
  reducers: {
    setTimePackage: (state, action) => {
      state.timePackage = action.payload;
      return state;
    },
    setPrice: (state, action) => {
      state.price = action.payload;
      return state;
    },
  },
});

const { reducer, actions } = Payment;
export const { setTimePackage, setPrice } = actions;
export default reducer;
