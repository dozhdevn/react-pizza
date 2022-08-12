import { createSlice, Draft, PayloadAction } from "@reduxjs/toolkit";
import { User } from "./types"

export interface AuthState {
  isAuth: boolean
  isError: boolean
  isLoading: boolean
  user: User
}

const initialState: AuthState = {
  isAuth: false,
  isError: false,
  isLoading: false,
  user: {} as User
}

const AuthSlice = createSlice({
  name: '@@auth',
  initialState,
  reducers: {
    fetchAuth: (state: Draft<AuthState>, action: PayloadAction<User>) => {
      state.isLoading = true
    },
    setUser: (state: Draft<AuthState>, action: PayloadAction<User>): void => {
      state.isLoading = false
      state.isAuth = true
      state.user = action.payload
    },
    setError: (state: Draft<AuthState>) => {
      state.isError = true
      state.isLoading = false
    }
  }
})

export const { fetchAuth, setUser, setError } = AuthSlice.actions

export default AuthSlice.reducer
