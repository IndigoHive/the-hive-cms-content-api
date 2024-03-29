import type { Pagination } from '../../../types'

export type GetContentsPageQuery = Pagination & {
  id?: string
  idIn?: string[]
  [key: string]: string | string[] | number | number[] | Date | Date[] | boolean | boolean[] | undefined
}
