import { BaseClient } from '../../base-client'
import { Page } from '../../types'
import {
  GetPostResult,
  GetPostsPageQuery,
  GetPostsPageResult,
  PublishPostViewedCommand
} from './types'

export class PostsClient extends BaseClient {
  async getPage(
    params: GetPostsPageQuery = {},
    signal?: AbortSignal
  ): Promise<Page<GetPostsPageResult>> {
    return (await this.axios.get(`/posts`, { params, signal })).data
  }

  async getById(
    postId: string,
    signal?: AbortSignal
  ): Promise<GetPostResult> {
    return (await this.axios.get(`/posts/${postId}`, { signal, })).data
  }

  async getBySlug(
    slug: string,
    signal?: AbortSignal
  ): Promise<GetPostResult> {
    return (await this.axios.get(`/posts/slug/${slug}`, { signal, })).data
  }

  async view (
    postId: string,
    data: PublishPostViewedCommand = {}
  ): Promise<void> {
    await this.axios.post(`/posts/${postId}/view`, data)
  }
}
