import { BaseClient } from '../../base-client'
import { Page } from '../../types'
import { GetTagResult, GetTagsPageQuery } from './types'

export class TagsClient extends BaseClient {
  async getPage (
    params: GetTagsPageQuery = {},
    signal?: AbortSignal
  ): Promise<Page<GetTagResult>> {
    return (await this.axios.get('/tags', { params, signal })).data
  }

  async getBySlug (
    slug: string,
    signal?: AbortSignal
  ): Promise<GetTagResult> {
    return (await this.axios.get(`/tags/${slug}`, { signal })).data
  }
}
