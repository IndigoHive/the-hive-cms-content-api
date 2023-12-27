import { BaseClient } from '../../base-client'
import { Page } from '../../types'
import { GetContentsPageQuery } from './types'

export class ContentsClient extends BaseClient {
  async getPage<T> (
    type: string,
    params: GetContentsPageQuery = {},
    signal?: AbortSignal
  ): Promise<Page<T>> {
    return (await this.axios.get(type, { params, signal })).data
  }

  async getByUniqueField<T> (
    type: string,
    field: string,
    value: string,
    signal?: AbortSignal
  ): Promise<T> {
    return (await this.axios.get(`${type}/${field}/${value}`, { signal })).data
  }
}
