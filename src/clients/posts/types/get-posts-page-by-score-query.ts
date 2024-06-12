import type { Pagination } from '../../../types'

export type GetPostsPageByScoreQuery = Pagination & {
  tags?: string[]
  excludePostVersionIds?: string[]
  includeData?: boolean
}
