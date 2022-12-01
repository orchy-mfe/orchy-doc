---
sidebar_position: 6
---

# PageBuilder

The `@orchy-mfe/page-builder` package is a library that allows us to do [Server Driven UI](https://www.judo.app/blog/server-driven-ui/), transforming a Page configuration `JSON` in a set of `HTMLElements` that can be appended in your DOM.

Here is a full example of the configuration that we are going to explore in the next pages:

```json
{
  "type": "flex-column",
  "attributes": {
    "id": "root"
  },
  "content": [{
    "type": "flex-row",
    "properties": {
      "name": "row-name"
    },
    "content": [{
      "type": "element",
      "tag": "div",
      "properties": {
        "complexObject": {"key": "value"}
      }
    }]
  }, {
    "type": "element",
    "tag": "link",
    "attributes": {
      "rel": "stylesheet",
      "href": "https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css"
    }
  }]
}
```

It produces the following output:
```html
<div>
  <div style="display: flex; flex-direction: column" id="root">
    <div style="display: flex; flex-direction: row">
      <div></div>
    </div>
    <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@4.4.1/dist/css/bootstrap.min.css">
  </div>
</div>
```