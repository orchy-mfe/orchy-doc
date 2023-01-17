---
sidebar_position: 7
---

# Micro Frontend with import map

In this example we have the following scenario:

- a Micro Frontend made with `React`;

Our goal is to enable `import maps` for `react` and `react-dom`, to exclude them from the build artifact and make them available at runtime.

## Running example

import OrchyAdapter from '@site/src/components/OrchyAdapter';

<OrchyAdapter />