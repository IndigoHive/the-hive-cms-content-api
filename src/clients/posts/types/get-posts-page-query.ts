import type { Pagination } from '../../../types'

export type GetPostsPageQuery = Pagination & {
  tag?: string
  tags?: string[]
  postType?: string
  postTypes?: string[]
}
