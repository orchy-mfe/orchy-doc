---
sidebar_position: 1
---

# Templates

## Are you going to create a new Micro Frontend?

The `Orchy Project` provides different templates which works out-of-the-box with the orchestrator: you only have to choose your preferred one, clone it and start editing!

Here an exhaustive list of all the available templates grouped by type.

<table>
    <tr>
        <th>Template</th>
        <th colspan="2">Variants</th>
    </tr>
    <tr>
        <td>React</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-react-js-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-react-js-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Angular</td>
        <td colspan="2" style={{textAlign: 'center'}}>
            <a href="https://github.com/orchy-mfe/orchy-angular-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Vue</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-vue-js-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-vue-js-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Svelte</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-svelte-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-svelte-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Preact</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-preact-js-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-preact-js-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Solid</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-solid-js-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-solid-js-typescript-template">TypeScript</a>
        </td>
    </tr>
    <tr>
        <td>Vanilla</td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-vanilla-template">JavaScript</a>
        </td>
        <td>
            <a href="https://github.com/orchy-mfe/orchy-vanilla-typescript-template">TypeScript</a>
        </td>
    </tr>
</table>

:::info
All the templates includes unit tests to ensure that they always work correctly.

Additionally, the dependencies of each template are automatically updated using [Renovate](https://docs.renovatebot.com/).
:::

## Interactive template download

Would you like to scaffold a new Micro Frontend, without leaving the CLI?

The tool `create-orchy-mfe` is what you need!

### Usage

There are multiple ways to run it, e.g.:
- installing it, using the command
```bash 
npm install -g create-orchy-mfe
```
- using `npx`, with the command 
```bash
npx create-orchy-mfe
```
- using `npm`, with the command
```bash 
npm create orchy-mfe
```

The following video is an example of what you can get with `create-orchy-mfe` installed and running.

<video controls>
    <source src="/create-orchy-mfe.mp4"></source>
</video>

## Non-interactive template download

If you prefer, `create-orchy-mfe` can also be invoked in a non-interactive way, using the following CLI arguments:

```bash
Options:
    -d, --directory  The directory where your micro-frontend will be located
    -h, --help       Output usage information
    -n, --name       The name of your new micro-frontend
    -t, --template   The template that will be used generate your micro-frontend
    -T, --ts         Use the TypeScript variant of the template
    -v, --version    Output the version number
```

## Troubleshooting

### Rate limit
If you get an error about GitHub's rate limit, you should define the `GITHUB_AUTH_TOKEN` environment variable, which will be used to access the GitHub APIs' using the `octokit` client.