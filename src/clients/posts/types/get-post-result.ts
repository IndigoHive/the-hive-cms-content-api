export type GetPostResult = {
  id: string
  title: string | null
  slug: string | null
  description: string | null
  content: string | null
  externalUrl: string | null
  viewsCount: number
  type: {
    id: string
    name: string
    slug: string
  } | null
  updatedAt: string
  publishedAt: string
  tags: string[]
  cover: {
    url?: string | null
  }
  media: {
    url?: string | null
  }
  thumbnail: {
    url?: string | null
  }
  data: any
}
