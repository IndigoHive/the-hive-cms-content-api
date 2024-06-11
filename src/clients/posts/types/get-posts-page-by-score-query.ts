import type { Pagination } from '../../../types'

export type GetPostsPageByScoreQuery = Pagination & {
  tags?: string[]
  excludeVersionIds?: string[]
  includeData?: boolean
}
