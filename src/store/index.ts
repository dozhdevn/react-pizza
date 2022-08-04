import {
  configureStore,
  combineReducers,
  getDefaultMiddleware
} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import filter from './Filter'
import cart from './Cart'
import pizzas from './Pizzas'
import pizzaItem from './Pizza'
import { rootSaga } from "./rootSaga";


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

export type AppState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga)