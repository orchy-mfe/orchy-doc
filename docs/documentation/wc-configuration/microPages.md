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

## microPages configuration example

Here is a full example of the `microPages` field configuration.

```json
"microPages": {
  "/route/load": {
    "pageConfiguration": "page-config",
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
- `basePath`: defines the base path for internal Micro Frontend routing.  
  Take a look at [this example](https://github.com/orchy-mfe/orchy-examples/tree/main/examples/routing-mfe) to better understand how to use it;
- `eventBus`: an [RxJS ReplaySubject](https://rxjs.dev/api/index/class/ReplaySubject) used to communicate with the other Micro Frontends in the same page.  
    Take a look at [this example](https://github.com/orchy-mfe/orchy-examples/tree/main/examples/communication-mfe-mfe) to better understand how to use it.
:::