import { all } from "redux-saga/effects";
import { pizzaItemSaga } from "./Pizza/sagas";
import { pizzasSaga } from "./Pizzas/sagas";

export function* rootSaga() {
  yield all([pizzasSaga(), pizzaItemSaga()])
}