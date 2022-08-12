import { all } from "redux-saga/effects";
import { AuthSaga } from "./Auth/sagas";
import { pizzaItemSaga } from "./Pizza/sagas";
import { pizzasSaga } from "./Pizzas/sagas";

export function* rootSaga() {
  yield all([AuthSaga(), pizzasSaga(), pizzaItemSaga()])
}