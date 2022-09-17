// @ts-check

const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: 'Orchy',
  tagline: 'The Micro Frontends orchestrator',
  url: 'https://orchy-mfe.github.io',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'throw',
  favicon: 'img/favicon.ico',

  organizationName: 'orchy-mfe',
  projectName: 'orchy-doc',

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'en',
    locales: ['en'],
  },

  plugins: [require.resolve("docusaurus-plugin-image-zoom")],

  presets: [
    [
      'classic',
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl:
            'https://github.com/orchy-mfe/orchy-doc/tree/main/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: 'Orchy',
        logo: {
          alt: 'Orchy logo',
          src: 'img/logo.svg',
        },
        items: [
          {
            type: 'doc',
            docId: 'documentation/intro',
            position: 'left',
            label: 'Documentation',
          },
          {
            type: 'doc',
            docId: 'templates/templates',
            position: 'left',
            label: 'Templates',
          },
          {
            type: 'doc',
            docId: 'tutorials/tutorials/tutorials',
            position: 'left',
            label: 'Tutorials',
          },
          {
            href: 'https://github.com/orchy-mfe',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        links: [],
        copyright: `Copyright © ${new Date().getFullYear()} Orchy Project.<br>Built with ❤️ & Docusaurus.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      zoom: {
        selector: '.markdown :not(em) > img',
        config: {
          background: {
            light: 'rgb(255, 255, 255)',
            dark: 'rgb(50, 50, 50)'
          }
        }
      }
    }),
    themes: [
      [require.resolve("@easyops-cn/docusaurus-search-local"), {}]
    ]
};

module.exports = config;
