import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "../Pizza/types";
import { Params } from "./types";

export interface PizzasItemState {
  items: Pizza[]
  isLoading: boolean,
  isError: boolean
}

const initialState: PizzasItemState = {
  items: [],
  isLoading: false,
  isError: false
}

const pizzasSlice = createSlice({
  name: '@@pizzas',
  initialState,
  reducers: {
    fetchPizzas(state: Draft<PizzasItemState>, action: PayloadAction<Params>) {
      state.isLoading = true
    },
    fetchPizzasSuccess(state: Draft<PizzasItemState>, action: PayloadAction<Pizza[]>) {
      state.items = action.payload
      state.isLoading = false
    },
    fetchPizzasError(state: Draft<PizzasItemState>) {
      state.isLoading = false
      state.isError =  true
    }
  }
})

export const { fetchPizzas, fetchPizzasSuccess, fetchPizzasError } = pizzasSlice.actions

export default pizzasSlice.reducer