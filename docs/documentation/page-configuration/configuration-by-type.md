---
sidebar_position: 2
---

# Configuration by type

The `type` property defines the kind of HTML element you are going to create.

You can see most of them as shortcuts to reduce the definition boilerplate.

## Layout types

Layout types are shortcuts to create the layout of other HTML elements.

### flex-row

`flex-row` is a shortcut for an element with:
- `div` as tag;
- `display: flex; flex-direction: row` as style attribute.

E.g., this configuration:

```json
{
  "type": "flex-row"
}
```

Will produce:

```html
<div style="display: flex; flex-direction: row"></div>
```

### flex-column

`flex-column` is a shortcut for an element with:
- `div` as tag;
- `display: flex; flex-direction: column` as style attribute.

E.g., this configuration:

```json
{
  "type": "flex-column"
}
```

Will produce:

```html
<div style="display: flex; flex-direction: column"></div>
```

## General types

### element

`element` type allows you to create an element with a custom tag, through the **mandatory** `tag` field.  
Also, you can specify the optional `url` field, useful to load the entry point JavaScript of a Web Component.

E.g., this configuration:

```json
{
  "type": "element",
  "tag": "orchy-wc",
  "url": "https://orchy-wc.entry/point.js"
}
```

Will produce:

```html
<orchy-wc></orchy-wc>
```