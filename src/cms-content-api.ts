import axios from 'axios'
import type { AxiosInstance } from 'axios'
import qs from 'qs'
import { ContentsClient } from './clients/content'
import { PostsClient } from './clients/posts'
import { TagsClient } from './clients/tags'
import type { BaseClientOptions } from './base-client'

export type CmsContentApiOptions = {
  apiKey?: string
  organization: string
  space: string
  environment: string
  devMode?: {
    request?: {
      delay?: number
    }
    response?: {
      delay?: number
    }
  }
}

export class CmsContentApi {
  private readonly axios: AxiosInstance

  content: ContentsClient
  posts: PostsClient
  tags: TagsClient

  constructor (options: CmsContentApiOptions) {
    const { apiKey, organization, space, environment } = options

    this.axios = axios.create({
      baseURL: `https://cms-api.indigohive.com.br/content/${organization}/${space}/${environment}`,
      withCredentials: true,
      paramsSerializer: (params) => qs.stringify(params, { arrayFormat: 'repeat' }),
      headers: {
        'Api-Key': apiKey
      }
    })

    this.setupDevMode(options.devMode)

    const baseOptions: BaseClientOptions = {
      axios: this.axios
    }

    this.content = new ContentsClient(baseOptions)
    this.posts = new PostsClient(baseOptions)
    this.tags = new TagsClient(baseOptions)
  }

  isBadRequest (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 400
  }

  isConflict (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 409
  }

  isNetworkError (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response === undefined
  }

  isNotFound (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 404
  }

  isUnauthorized (error: unknown): boolean {
    return axios.isAxiosError(error) && error.response?.status === 401
  }

  private setupDevMode (devMode: CmsContentApiOptions['devMode']): void {
    if (devMode?.request?.delay !== undefined) {
      this.axios.interceptors.request.use((config) => {
        return new Promise((resolve) => {
          if (devMode.request?.delay !== Infinity) {
            setTimeout(() => { resolve(config) }, devMode.request?.delay)
          }
        })
      })
    }

    if (devMode?.response?.delay !== undefined) {
      this.axios.interceptors.response.use((response) => {
        return new Promise((resolve) => {
          if (devMode.response?.delay !== Infinity) {
            setTimeout(() => { resolve(response) }, devMode.response?.delay)
          }
        })
      })
    }
  }
}
