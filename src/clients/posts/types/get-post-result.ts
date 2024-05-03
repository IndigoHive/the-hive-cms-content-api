export type GetPostResult = {
  id: string
  title: string | null
  slug: string | null
  description: string | null
  content: string | null
  externalUrl: string | null
  externalUrls: string[] | null
  viewsCount: number
  type: {
    id: string
    name: string
    slug: string
  } | null
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
  relevance: number
}
