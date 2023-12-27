import { Pagination } from '../../../types'

export type GetPostsPageQuery = Pagination & {
  tag?: string
  postType?: string
  postTypes?: string[]
}
