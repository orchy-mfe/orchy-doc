---
sidebar_position: 3
---

# Web Component configuration

The orchy configuration is divided in two fields: `microPages` and `common`.

Here is a full example of the configuration that we are going to explore in the next pages:

```json
{
  "microPages": {
    "/route/load": {
      "pageConfiguration": "page-config",
      "properties": {
        "pageName": "Page test"
      }
    }
  },
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
}
```
