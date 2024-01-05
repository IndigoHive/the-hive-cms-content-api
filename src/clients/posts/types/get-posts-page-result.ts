export type GetPostsPageResult = {
  id: string
  title: string | null
  slug: string | null
  description: string | null
  externalUrl: string | null
  viewsCount: number
  updatedAt: string
  publishedAt: string
  tags: {
    id: string
    name: string
    slug: string
  }[]
  cover: {
    url?: string | null
  }
  media: {
    url?: string | null
  }
}
