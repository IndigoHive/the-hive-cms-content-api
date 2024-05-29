export type GetPostsPageByScoreResult = {
  id: string
  publishedVersionId: string
  title: string | null
  slug: string | null
  description: string | null
  externalUrl: string | null
  externalUrls: string[] | null
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
    caption?: string | null
  }
  media: {
    url?: string | null
    caption?: string | null
  }
  thumbnail: {
    url?: string | null
    caption?: string | null
  }
  data: any
  type: {
    id: string
    name: string
    slug: string
  } | null
  relevance: number
  score: number
}
