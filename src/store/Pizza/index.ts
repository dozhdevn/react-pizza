import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { Pizza } from "./types";

export interface PizzaItemState {
  pizza: Pizza | undefined
  isLoading: boolean
  isError: boolean
}

const initialState: PizzaItemState = {
  pizza: undefined,
  isLoading: false,
  isError: false
}

const pizzaItemSlice = createSlice({
  name: '@@pizzaItem',
  initialState,
  reducers: {
    fetchPizzaItem(state: Draft<PizzaItemState>, action: PayloadAction<string>): void {
      state.pizza = undefined
      state.isLoading = true
    },
    fetchPizzaItemSuccess(state: Draft<PizzaItemState>, action: PayloadAction<Pizza>) {
      state.pizza = action.payload
      state.isLoading = false
    },
    fetchPizzaItemError(state: Draft<PizzaItemState>) {
      state.isLoading = false
      state.isError =  true
    }
  }
})

export const { fetchPizzaItem, fetchPizzaItemSuccess, fetchPizzaItemError } = pizzaItemSlice.actions

export default pizzaItemSlice.reducer