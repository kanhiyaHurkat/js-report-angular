export interface BaseApiModel<T> {
  data: T | undefined
  message: string | undefined
  status: number | undefined
}

export interface PageableApiModel<T> extends Pagination {
  items: T[]
}

export interface DataApiModel<T> {
  items: T[]
}

export interface Pagination {
  currentItems: number
  itemsPerPage: number
  totalPage: number
}


