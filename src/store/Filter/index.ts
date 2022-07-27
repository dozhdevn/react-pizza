import { createSlice, Draft, PayloadAction } from '@reduxjs/toolkit'
import { SortItem, SortName, sortProperty } from './types'

export interface FilterState {
  category: number
  currentPage: number
  sort: SortItem
}

const initialState: FilterState = {
  category: 0,
  currentPage: 1,
  sort: {
    name: SortName.POPULAR,
    sortProperty: sortProperty.RATING
  }
}

const filterSlice = createSlice({
  name: 'filter',
  initialState,
  reducers: {
    setCategory(state: Draft<FilterState>, action: PayloadAction<number>) {
      state.category = action.payload
    },
    setSort(state: Draft<FilterState>, action: PayloadAction<SortItem>) {
      state.sort = action.payload
    },
    setCurrentPage(state: Draft<FilterState>, action: PayloadAction<number>) {
      state.currentPage = action.payload
    },
    setFilters(state: Draft<FilterState>, action) {
      console.log(action.payload)
      state.currentPage = Number(action.payload.currentPage);
      state.category = Number(action.payload.categoryId);
      state.sort = action.payload.sort
    }
  }
})

export const {
  setCategory,
  setSort,
  setCurrentPage,
  setFilters
} = filterSlice.actions

export default filterSlice.reducer