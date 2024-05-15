export type GetPostScoresQuery = {
  publishedAfter: Date | string
  publishedBefore: Date | string
  scoreGreaterThan: number
  scoreLesserThan: number
  limitResults: boolean
  pageSize: number
}
