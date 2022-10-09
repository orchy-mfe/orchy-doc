---
sidebar_position: 4
---

# microPages

This field is an object which allows you to compose your page, and your Micro Frontends, grouping them by the exposition path.

So, in this object, the key represents the path that `orchy` will handle to expose your desired Micro Frontends.

## microPages.pageConfiguration

`pageConfiguration` is an optional field which specifies the configuration name that will be fetched to compose your page.

The configuration content must adhere to the [PageBuilder configuration standard](../page-configuration/page-configuration.md).

If not defined, will be used the following as `pageConfiguration` content:
```json
{
  "type": "element",
  "tag": "div",
  "attributes": {
    "id": "defaultContainer"
  }
}
```

## microPages.properties

`properties` field object contains the additional properties that will be injected to all the Micro Frontends in the page, at mount phase.

## microPages.microFrontends

`microFrontends` is a **mandatory** array field that is used to define the Micro Frontends to load for the specified path.

The Micro Frontend definition is made through the following fields.

### microPages.microFrontends.container

`container` is a field that defines the [querySelector](https://developer.mozilla.org/en-US/docs/Web/API/Document/querySelector) used to retrieve the container element in which your Micro Frontend will be mounted.

It is **mandatory** only if multiple Micro Frontends are defined, otherwise is optional with `#root` as default value.

### microPages.microFrontends.entryPoint

`entryPoint` field defines where is exposed the `index.html` of you Micro Frontend; it can be defined with both a relative or absolute path and even with a different domain.

:::danger
If you decide to expose your Micro Frontends on different hosts, be aware of [Cross Origin Resource Sharing (CORS)](https://developer.mozilla.org/en-US/docs/Web/HTTP/CORS).
:::

### microPages.microFrontends.id

`id` field represents a **mandatory unique identifier** for your Micro Frontend, used for caching purposes.

### microPages.microFrontends.properties

`properties` field object contains the additional properties that will be available at the Micro Frontend's mount phase.


## microPages configuration example

Here is a full example of the `microPages` field configuration.

```json
"microPages": {
  "/route/load": {
    "pageConfiguration": "page-config",
    "microFrontends": [
      {
        "container": "#toor"  ,
        "entryPoint": "//localhost:3000",
        "id": "microfrontend-test-1",
        "properties": {
          "mfName": "Name test"
        }
      }
    ],
    "properties": {
      "pageName": "Page test"
    }
  }
}
```

In plain english, it means that: when we will navigate to the `/route/load` path, the `page-config` configuration will be used to compose your page.

Additionally, will be fetched one Micro Frontend from `localhost:3000`, with `microfrontend-test-1` as `id`. Once fetched, it will be mounted in a container with `id=toor` and then will be injected the `mfName` and `pageName` properties.

## Properties injection

In properties injection, `microPages.microFrontend.properties` has more priority than `microPages.properties`.

This means that if a property is defined in both `microPage.properties` and `microPages.microFrontend.properties`, only the value in `microPages.microFrontend.properties` will be effectively injected.

:::danger
There are two properties reserved for specific `orchy` usage:
- `baseUrl`: defines the base url for internal Micro Frontend routing;
- `eventBus`: an [RxJS ReplaySubject](https://rxjs.dev/api/index/class/ReplaySubject) used to communicate with the other Micro Frontends in the same page.
:::