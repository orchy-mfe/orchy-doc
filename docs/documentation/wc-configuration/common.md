---
sidebar_position: 5
---

# common

This field is used to inject once all the elements in common between each Micro Frontend.

## common.stylesheets

`stylesheets` represents an optional list of `.css` files that could be used to define a common set of icons, or style your Micro Frontends.

## common.importMap

`importMap` defines a way to control the behavior of JavaScript imports.  
Despite [it is still a proposal](https://github.com/WICG/import-maps), and only Chrome directly supports it, `orchy` installs a polyfill to extends the support to all the other browsers.

The content of this field is the same as a [standard import map](https://github.com/WICG/import-maps#the-import-map).

:::caution
When it will be supported out-of-the-box by [all the major browsers](https://caniuse.com/import-maps), the [polyfill](https://www.npmjs.com/package/es-module-shims) will be removed.

The data model of this field will always be aligned with the standard specification.
:::


## common configuration example

Here is a full example of the `common` field configuration.

```json
"common": {
  "stylesheets": [
    "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
  ],
  "importMap": {
    "imports": {
      "react": "https://esm.sh/react@18.2.0",
      "react-dom": "https://esm.sh/react-dom@18.2.0"
    }
  }
}
```

In plain english, it means that: firstly, once the web component is loaded, the bootstrap css will be injected in the page.

Secondly, all the [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules) that will need to load `react` or  `react-dom` will redirected to the relative dependency from `esm.sh`.