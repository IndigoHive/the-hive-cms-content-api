export type Page<T> = {
  data: T[]
  pageNumber: number
  pageSize: number
  totalSize: number
}
