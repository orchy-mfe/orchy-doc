---
sidebar_position: 4
---

# Customize eventBus payload type

For a TypeScript project, you can define the `ReplaySubject` payload type using the `generic` parameter provided by the `OrchyMicroFrontend` class as follow:

```javascript
import OrchyMicroFrontend from '@orchy-mfe/spa-adapter'

type PayloadType = {kind: string}

export class ReactMfe extends OrchyMicroFrontend<PayloadType> {
    async mount(microFrontendProperties: MicroFrontendProperties<PayloadType>) {
    }

    async mount(microFrontendProperties: MicroFrontendProperties<PayloadType>) {
    }
}
```