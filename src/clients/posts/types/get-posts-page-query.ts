import type { Pagination } from '../../../types'

export type GetPostsPageQuery = Pagination & {
  tag?: string
  tags?: string[]
  excludePostVersionIds?: string[]
  postType?: string
  postTypes?: string[]
  contentContains?: string
  titleContains?: string
  includeData?: boolean
  orderBy?: 'MostViewed' | 'MostRelevant' | 'Score'
  PublishedAfter?: Date
  PublishedBefore?: Date
}
