import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice'
import { getCartFromLocalStorage } from '../../utils/getCartFromLocalStorage'
import { PizzaCart } from './types'

export interface CartState {
  items: PizzaCart[]
  totalPrice: number
}

const initialState: CartState = getCartFromLocalStorage()

const cartSlice = createSlice({
  name: '@@cart',
  initialState,
  reducers: {
    addItem(state: Draft<CartState>, action: PayloadAction<PizzaCart>) {
      const findItem = state.items.find(item => item.id === action.payload.id)
      if (findItem) {
        findItem.count++
        state.totalPrice = calcTotalPrice(state.items)
        return
      }
      state.items.push({
        ...action.payload,
        count: 1
      })

      state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state: Draft<CartState>, action: PayloadAction<string>) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count--
      }
      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state: Draft<CartState>, action: PayloadAction<string>) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems(state: Draft<CartState>) {
      state.items = []
      state.totalPrice = 0
    }
  }
})

export const {
  addItem,
  minusItem,
  removeItem,
  clearItems
} = cartSlice.actions

export default cartSlice.reducer