import { AppState } from "..";

export const selectCart = (state: AppState) => state.cart

export const selectCartItemById = (id: string) => (state: AppState) => state.cart.items.find(item => item.id === id)

export const selectTotalPrice = (state: AppState) => state.cart.totalPrice