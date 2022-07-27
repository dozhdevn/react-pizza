export enum SortName {
  POPULAR = 'популярности',
  PRICE ='цена',
  ALPHABET = 'алфавиту'
}

export enum sortProperty {
  RATING = 'rating',
  PRICE = 'price',
  TITLE = 'title'
}
export type SortItem = {
  name: SortName
  sortProperty: sortProperty
}