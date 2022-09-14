---
sidebar_position: 2
---

# Common page configuration

Here are described the common fields that can **always** be inserted in each definition.

## type

`type` is a string which defines the kind of HTML element you are going to create.

Its domain is: `element`, `flex-row`, `flex-column`. For more details, see the [dedicated section](./element-types.md).

## attributes

`attributes` is an object which defines the [attributes of an HTML element](https://developer.mozilla.org/en-US/docs/Web/HTML/Attributes).

Attributes **are displayed** when you append the new node to the DOM.

## properties

`properties` is an object which defines the properties of an HTML element.

Properties **are not displayed** when you append the new node to the DOM.

:::info
Contrary to `attributes`, which are serialized as strings, `properties` can be used to define complex inputs as: JavaScript objects, RxJS ReplaySubject...
:::
