import type { Pagination } from '../../../types'

export type GetContentsPageQuery = Pagination & {
  id?: string
  idIn?: string[]
}
