---
sidebar_position: 2
---

# Web Component configuration

The orchy configuration is divided in two fields: `microPages` and `common`.

Here is a full example of configuration that we will explore in the next pages.

```json
{
  "microFrontends": {
    "/route/load": {
      "pageConfiguration": "page-config",
      "applications": [
        {
          "entryPoint": "//localhost:3000",
          "id": "microfrontend-test-1",
          "properties": {
            "mfName": "Name test"
          }
        }
      ]
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
