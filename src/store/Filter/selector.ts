import { AppState } from "..";

export const selectFilter = (state: AppState) => state.filter

export const selectFilterSort = (state: AppState) => state.filter.sort