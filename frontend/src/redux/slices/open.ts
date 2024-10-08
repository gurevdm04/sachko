// Внешние библиотеки
import { createSlice } from "@reduxjs/toolkit";

interface CounterState {
  value: boolean;
}

const initialState: CounterState = {
  value: false,
};

export const openSlice = createSlice({
  name: "open",
  initialState,
  reducers: {
    toogle: (state) => {
      state.value = !state.value;
    },
  },
});

export const { toogle } = openSlice.actions;

export const openReducer = openSlice.reducer;
