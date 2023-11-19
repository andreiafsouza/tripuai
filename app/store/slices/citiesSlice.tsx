import { createSlice } from "@reduxjs/toolkit";
import type { PayloadAction } from "@reduxjs/toolkit";
import { CityProps } from "types/global";

// Define a type for the slice state
interface CitiesState {
  cities: CityProps[];
}

const initialState = {
  cities: [],
} as CitiesState;

export const citiesSlice = createSlice({
  name: "cities",
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    // Use the PayloadAction type to declare the contents of `action.payload`
    list: (state, action: PayloadAction<CityProps[]>) => {
      action.payload;
    },
  },
});

export const { list } = citiesSlice.actions;

export default citiesSlice.reducer;
