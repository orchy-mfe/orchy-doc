---
sidebar_position: 3
---

# microPages

This field is an object which allows you to compose your page, and your Micro Frontends, grouping them by the exposition path.

So, in this object, the key represents the path that `orchy` will handle to expose your desider Micro Frontends.

## microPages.pageConfiguration

`pageConfiguration` is an optional field that specifies the configuration name that will be fetched to compose your page.

The configuration content must adhere to the PageBuilder configuration standard.

If not defined, will be used the following as fallback value:
```json
{
    "type": "element",
    "tag": "div",
    "attributes": {
        "id": "defaultContainer"
    }
}
```

## microPages.microFrontends

`microFrontends` is a **mandatory** array field that is used to define the Micro Frontends to load for the specified path.

The Micro Frontend definition is made through the following fields.

### microPages.microFrontends.entryPoint

`entryPoint` field defines where is exposed the `index.html` of you Micro Frontend; it can be defined with both a relative or absolute path and even with a different domain.

:::danger
If you decide to expose your Micro Frontends, be awere of [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
:::