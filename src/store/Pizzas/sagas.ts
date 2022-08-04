import { call, put, takeLatest } from 'redux-saga/effects'
import { fetchPizzas, fetchPizzasSuccess, fetchPizzasError } from '.'
import { Pizza } from '../Pizza/types'
import { PizzasApi } from './pizzasApi'

const PizzasRepo = new PizzasApi()

function* fetchPizzasRequest({ payload }: ReturnType<typeof fetchPizzas>){
  const { category, sort, currentPage } = payload
  try {
    const response: Pizza[] = yield call(PizzasRepo.fetchPizzas, category, sort.sortProperty, currentPage)
    yield put(fetchPizzasSuccess(response))
  } catch (error) {
    yield put(fetchPizzasError())
  }
}

export function* pizzasSaga(){
  yield takeLatest(fetchPizzas.type, fetchPizzasRequest)
}