---
sidebar_position: 1
---

# Introduction

The `Orchy Project` consists in a bunch of utilities and templates that can help you to easily implement the [Micro Frontends](https://micro-frontends.org/) pattern in a performant way.

All of this is possible thanks to an open source [Web Component](https://developer.mozilla.org/en-US/docs/Web/Web_Components) which aims to orchestrate multiple multi-tenant frontend applications leveraging on the following technologies:

- [Micro Frontends](https://micro-frontends.org/) pattern;
- [JavaScript modules](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Guide/Modules);
- [Server Driven UI](https://www.judo.app/blog/server-driven-ui/).

Each UI and each Micro Frontend is managed using the Client Side Composition variant of the Micro Frontend pattern.

Thanks to the out of the box support to Server Driven UI, `orchy` also supports both **horizontal** and **vertical** split of the view.

## Project details

All the repositories of the `Orchy Project` are open sourced under the [MIT](https://opensource.org/licenses/MIT) license and they are available in the [orchy-mfe GitHub organization](https://github.com/orchy-mfe).

The [`orchy-core`](https://github.com/orchy-mfe/orchy-core) repository is the main one, and is a monorepo which includes the following packages:
- `@orchy-mfe/be`: a [Fastify](https://www.fastify.io/) backend that can be used to serve `orchy`'s configuration files;
- `@orchy-mfe/models`: includes the TypeScript models for the `orchy`'s configurations and the Micro Frontends properties;
- `@orchy-mfe/page-builder`: the library which enables the Server Driven UI;
- `@orchy-mfe/web-component`: the Web Component which embeds the orchestration logics.

Same as Web Components are **technology-agnostic** by definition, so is `orchy`: it means that it integrates with low effort with your current Single Page Application, being it React, Preact, Vue, Svelte or anything else you like...even Vanilla JavaScript!

Are you going to create a new Micro Frontend? Take a look to the [templates section](./templates.md).