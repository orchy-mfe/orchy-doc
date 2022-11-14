---
sidebar_position: 4
---

# Customize eventBus payload type

:::tip
The first two operations are already done if you decide to use one of our [templates](../../templates/templates.md).
:::

For a TypeScript project, you can define the `ReplaySubject` payload using the `generic` provided by the `OrchyMicroFrontend` class.

The file content should be equivalent to:

```javascript
import OrchyBaseMfe from '@orchy-mfe/spa-adapter'
export class ReactMfe extends OrchyBaseMfe<{kind: string}> {

}
```