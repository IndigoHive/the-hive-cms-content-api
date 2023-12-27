import { describe, expect, test } from 'vitest'
import { CmsContentApi } from '../cms-content-api'

describe('CmsContentApi', () => {
  describe('isNotFound', () => {
    describe('when the response is 404', () => {
      test('returns true', () => {
        const client = new CmsContentApi({ organization: 'test', space: 'test', environment: 'test' })
        const error = { isAxiosError: true, response: { status: 404 } }

        const result = client.isNotFound(error)

        expect(result).toBe(true)
      })
    })

    describe('when the response is not 404', () => {
      test('returns false', () => {
        const client = new CmsContentApi({ organization: 'test', space: 'test', environment: 'test' })
        const error = { isAxiosError: true, response: { status: 400 } }

        const result = client.isNotFound(error)

        expect(result).toBe(false)
      })
    })
  })
})
