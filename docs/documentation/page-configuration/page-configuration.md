---
sidebar_position: 5
---

# Page configuration

The configuration of each page can be expressed through a plain `HTML` file, or with a `JSON` object that must adhere to the [PageBuilder configuration standard](./page-builder/page-builder.md).

You can use the `HTML` configuration to define the structure of your page, but to be correctly managed by `orchy` you **must** insert two attributes where needed:

- `orchy-micro-frontend`: this attribute defines that the `DOM` element is a Micro Frontend that must be managed by `orchy`. This will be used to search for the elements in which `orchy` will inject the `microFrontendProperties`;
- `orchy-element`: this attribute defines that the `DOM` element needs the `orchy's eventBus`. This will be used to search for the elements in which `orchy` will inject the `eventBus`.

Here is a full example of the configuration made with `HTML`:

```html
<div style="display: flex; flex-direction: row">
    <script type="module" src="/communication-react-mfe/index.js"></script>
    <communication-react-mfe orchy-micro-frontend></communication-react-mfe>
    <iframe src="/communication-svelte-iframe"></iframe>
</div>
```