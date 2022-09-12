---
sidebar_position: 6
---

# Import maps: the easy way

As [previously defined](../wc-configuration/common#commonimportmap), with `import maps` we can define at runtime which source will be used to load a specific module.

In this tutorial we will see how to configure a template to use them, and which advantages we can achieve.

## Template preparation

Let's apply them to a fresh React template!

Firstly, scaffold it using the `create-orchy-mfe` tool:

```bash
npx create-orchy-mfe -t react -d ./ -T=false -n orchy-react
```

:::info
Although the command above you will scaffold a **JavaScript React** template, this tutorial is still valid for all the other templates.
:::

Secondly, you must enter in the project folder and install the dependencies:
```bash
cd orchy-react && pnpm i
```

Thirdly, invoke the `build` script, to have a production-ready build of the template.
```bash
pnpm build
```

## Build: an artifact problem

Take a look at the `build` command result, if you have done everything correctly you should have a similar result:

![build command result - no import maps](./img/build-no-importmap.png)

As you can see, there is a `.js` file which size is ~147 KiB.

To understand the reasons behind these values, open the `stats.html` file.

![stats - no import maps](./img/stats-no-import.png)