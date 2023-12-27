import type { AxiosInstance } from 'axios'

export type BaseClientOptions = {
  axios: AxiosInstance
}

export abstract class BaseClient {
  protected axios: AxiosInstance

  constructor (options: BaseClientOptions) {
    this.axios = options.axios
  }
}
