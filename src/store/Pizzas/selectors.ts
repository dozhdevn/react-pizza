import { AppState } from ".."

export const selectPizzas = (state: AppState) => state.pizzas.items

export const selectLoading = (state: AppState) => state.pizzas.isLoading