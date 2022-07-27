import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import filter, { FilterState } from './Filter'
import cart, { CartState } from './Cart'
import pizzas, { PizzasItemState } from './Pizzas'
import pizzaItem, { PizzaItemState } from './Pizza'
import { rootSaga } from "./rootSaga";

export type AppState = {
  filter: FilterState
  cart: CartState
  pizzas: PizzasItemState
  pizzaItem: PizzaItemState
}

const sagaMiddleware = createSagaMiddleware()

export const reducer = combineReducers({
  filter,
  cart,
  pizzas,
  pizzaItem
})

export const store = configureStore({
  reducer,
  middleware: [...getDefaultMiddleware({ thunk: false }), sagaMiddleware]
})

sagaMiddleware.run(rootSaga)