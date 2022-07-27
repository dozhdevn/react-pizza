import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPizzaItem, fetchPizzaItemSuccess, fetchPizzaItemError } from '.'
import { PizzaItem } from './pizzaItemApi'
import { Pizza } from './types'

const PizzaItemRepo = new PizzaItem()

function* fetchPizzaItemRequest({ payload }: ReturnType<typeof fetchPizzaItem>){
  try {
    const response: Pizza = yield call(PizzaItemRepo.fetchPizzaItem, payload)
    yield put(fetchPizzaItemSuccess(response))
  } catch (error) {
    yield put(fetchPizzaItemError())
  }
}

export function* pizzaItemSaga(){
  yield takeLatest(fetchPizzaItem.type, fetchPizzaItemRequest)
}