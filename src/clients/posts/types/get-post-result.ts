export type GetPostResult = {
  id: string
  title: string | null
  slug: string | null
  description: string | null
  content: string | null
  externalUrl: string | null
  viewsCount: number
  updatedAt: string
  publishedAt: string
  tags: string[]
  cover: {
    url?: string | null
  }
  media: {
    url?: string | null
  }
  data: any
}
