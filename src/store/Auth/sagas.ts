import { call, delay, put, takeLatest } from 'redux-saga/effects'
import { fetchAuth, setError, setUser } from '.';
import { AuthApi } from './authApi';
import { User } from './types';

const AuthRepo = new AuthApi()

function* fetchAuthRequest({payload}: ReturnType<typeof fetchAuth>){
  const { username, password } = payload
  try {
    yield delay(1500)
    const response: User[] = yield call(AuthRepo.getUsers)
    const mockUser = response.find(item => item.username === username && item.password === password)
    if(mockUser) {
      localStorage.setItem('auth', 'true')
      localStorage.setItem('username', mockUser.username)
      yield put(setUser(mockUser))
    } else {
      yield put(setError())
    }
  } catch (error) {
    yield put(setError())
  }
}

export function* AuthSaga() {
  yield takeLatest(fetchAuth.type, fetchAuthRequest)
}