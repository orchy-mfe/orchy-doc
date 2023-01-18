---
sidebar_position: 2
---

# Installation

To use the Web Component in your website, you **must**:
- firstly, install the package **@orchy-mfe/web-component** from [`npm`](https://www.npmjs.com/);
- secondly, register the Web Component with:
```javascript
import '@orchy-mfe/web-component'
```
- finally, you can use it inside your page with:
```html
<orchy-wc basePath={basePath} configurationName={configurationName}></orchy-wc>
```

## Attributes

To configure its behavior, the Web Component exposes two attributes:
- `basePath`: the base path that will be used by the internal router to handle the Micro Frontends loading.  
  Its default value is the value of `window.location.pathname` when the Web Component is inserted in the page;
- `configurationName`: the name of the configuration that will be fetched to orchestrate your pages and your Micro Frontends.  
  Its default value is `orchy-config.json`. 

## Properties

To configure its behavior, the Web Component exposes one property:
- `eventBus`: an `eventBus` instance used to better integrate your existing application. It also enables automatically the communication between nested `orchy` instances.  
By default `orchy` creates its own `eventBus` instance internally.
  
In the [next section](./wc-configuration/wc-configuration.md), we will do a deep dive in the configuration content structure.
