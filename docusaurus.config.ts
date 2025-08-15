import {themes as prismThemes} from 'prism-react-renderer';
  import type {Config} from '@docusaurus/types';
  import type * as Preset from '@docusaurus/preset-classic';

  const config: Config = {
    title: 'Talent In Everyone',
    tagline: 'База знаний по иммиграционным визам США',
    favicon: 'img/favicon.ico',

    url: 'https://talentineveryone.com',
    baseUrl: '/',

    organizationName: 'egorka23',
    projectName: 'talentineveryone-docs',

    onBrokenLinks: 'throw',
    onBrokenMarkdownLinks: 'warn',

    i18n: {
      defaultLocale: 'ru',
      locales: ['ru'],
    },

    presets: [
      [
        'classic',
        {
          docs: {
            sidebarPath: './sidebars.ts',
            routeBasePath: '/',
            editUrl: 'https://github.com/egorka23/talentineveryone-docs/tree/main/',
          },
          blog: false,
          theme: {
            customCss: './src/css/custom.css',
          },
        } satisfies Preset.Options,
      ],
    ],

    themeConfig: {
      navbar: {
        title: 'Talent In Everyone',
        items: [
          {
            type: 'docSidebar',
            sidebarId: 'tutorialSidebar',
            position: 'left',
            label: 'База знаний',
          },
          {
            href: 'https://github.com/egorka23/talentineveryone-docs',
            label: 'GitHub',
            position: 'right',
          },
        ],
      },
      footer: {
        style: 'dark',
        copyright: `Copyright © ${new Date().getFullYear()} Talent In Everyone`,
      },
      prism: {
        theme: prismThemes.github,
        darkTheme: prismThemes.dracula,
      },
    } satisfies Preset.ThemeConfig,
  };

  export default config;
