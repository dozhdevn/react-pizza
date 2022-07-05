import {
  createSlice
} from '@reduxjs/toolkit'
import { calcTotalPrice } from '../../utils/calcTotalPrice'

const initialState = {
  totalPrice: 0,
  items: []
}

const cartSlice = createSlice({
  name: 'cart',
  initialState,
  reducers: {
    addItem(state, action) {
      const findItem = state.items.find(item => item.id === action.payload.id)
      if(findItem) {
        findItem.count++
      } else {
        state.items.push({
          ...action.payload,
          count: 1
        })
      }
     state.totalPrice = calcTotalPrice(state.items)
    },
    minusItem(state, action) {
      const findItem = state.items.find((item) => item.id === action.payload);

      if (findItem) {
        findItem.count--;
      }

      state.totalPrice = calcTotalPrice(state.items)
    },
    removeItem(state, action) {
      state.items = state.items.filter(item => item.id !== action.payload)
      state.totalPrice = calcTotalPrice(state.items)
    },
    clearItems(state) {
      state.items =[]
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