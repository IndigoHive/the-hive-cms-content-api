# The Hive CMS: Content API

[![.github/workflows/tests.yml](https://github.com/IndigoHive/the-hive-cms-content-api/actions/workflows/tests.yml/badge.svg)](https://github.com/IndigoHive/the-hive-cms-content-api/actions/workflows/tests.yml)
[![npm](https://img.shields.io/npm/v/%40thehive%2Fcms-content-api)](https://www.npmjs.com/package/@thehive/cms-content-api)
![NPM](https://img.shields.io/npm/l/%40thehive%2Fcms-content-api)
![npm](https://img.shields.io/npm/dw/%40thehive%2Fcms-content-api)

First, install the package:

```
npm install @thehive/cms-content-api
```

Create an instance:

```typescript
import { CmsContentApi } from '@thehive/cms-content-api'

const contentApi = new CmsContentApi({
  apiKey: process.env.THE_HIVE_CMS_API_KEY,
  organization: 'my-org',
  space: 'my-space',
  environment: 'main'
})
```

Use the client to request content:

```typescript
// Content
contentApi.content.getPage<MyContentResult>(
  'type',
  { pageNumber: 0, pageSize: 10 }
)
contentApi.content.getById<MyContentResult>('type', entryId)
contentApi.content.getByUniqueField<MyContentResult>('type', 'field', value)

// Posts
contentApi.posts.getPage({
  pageNumber: 1, pageSize: 10, postType: 'news'
})
contentApi.posts.getById(postId)
contentApi.posts.getBySlug(slug)
contentApi.posts.view(postId)

// Tags
contentApi.tags.getPage(pagination)
contentApi.tags.getBySlug('tag')
```
