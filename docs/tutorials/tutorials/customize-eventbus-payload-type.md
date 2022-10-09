---
sidebar_position: 4
---

# Customize eventBus payload type

:::tip
The following operations are already done if you decide to use one of ours [templates](../../templates/templates.md).
:::

For a TypeScript project, you can define the `ReplaySubject` payload type using these steps:

- firstly, install `@orchy-mfe/models` from [npm](https://npmjs.com);
- secondly, create a file called `env.d.ts` in your source folder.  
The file content should be equivalent to:

```javascript
import {MicrofrontendProperties} from '@orchy-mfe/models'
import 'vite-plugin-qiankun/dist/helper'

declare module 'vite-plugin-qiankun/dist/helper' {
  interface QiankunProps extends MicrofrontendProperties<any> {
  }
}
```

- finally, modify the `any` with your desired type.

:::note
This procedure is also valid if you want types definition for the [reserved orchy properties](../../documentation/wc-configuration/microPages.md#properties-injection).
:::