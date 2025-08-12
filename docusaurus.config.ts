import {themes as prismThemes} from 'prism-react-renderer';
import type {Config} from '@docusaurus/types';
import type * as Preset from '@docusaurus/preset-classic';

// This runs in Node.js - Don't use client-side code here (browser APIs, JSX...)

const config: Config = {
  title: 'Facettenschach',
  tagline: 'Strategische Schach-Evolution',
  favicon: 'img/favicon.ico',

  // Future flags, see https://docusaurus.io/docs/api/docusaurus-config#future
  future: {
    v4: true, // Improve compatibility with the upcoming Docusaurus v4
  },

  // Set the production url of your site here
  url: 'https://facettenschach.github.io',
  // Set the /<baseUrl>/ pathname under which your site is served
  // For GitHub pages deployment, it is often '/<projectName>/'
  baseUrl: '/',

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: 'facettenschach', // Usually your GitHub org/user name.
  projectName: 'facettenschach.github.io', // Usually your repo name.

  onBrokenLinks: 'warn',
  onBrokenMarkdownLinks: 'warn',

  // Even if you don't use internationalization, you can use this field to set
  // useful metadata like html lang. For example, if your site is Chinese, you
  // may want to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: 'de',
    locales: ['de'],
  },

  presets: [
    [
      'classic',
      ({
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          routeBasePath: 'docs', // keep docs under /docs
        },
        blog: {
          showReadingTime: true,
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      }),
    ],
  ],

  themeConfig: {
    image: 'img/ogImage.png', // social preview
    navbar: {
      title: 'Facettenschach',
      logo: {
        alt: 'Facettenschach logo',
        src: 'img/logo.svg',
      },
      items: [
        { to: '/docs/intro', label: 'Anleitung', position: 'left' },
        { to: '/blog', label: 'Blog', position: 'left' },
        { href: 'http://88.222.221.205/', label: 'Spielen', position: 'right' },
      ],
    },
    
    colorMode: {
      defaultMode: 'light',
      disableSwitch: false,
      respectPrefersColorScheme: true,
    },

    footer: {
      style: 'dark',
      links: [
        {
          title: 'Projekt',
          items: [
            { label: 'Github - Organisation', href: 'https://github.com/facettenschach' },
            { label: 'Github - Diese Seite', href: 'https://github.com/facettenschach/facettenschach.github.io' },
          ],
        },
        {
          title: 'Mehr',
          items: [
            { label: 'Anleitung', to: '/docs/intro' },
            { label: 'Blog', to: '/blog' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'YouTube', href: 'https://www.youtube.com/@chesscraft_Trainer' }, 
            { label: 'Kurse', href: 'https://pandachess.de/' },
          ],
        },
        {
          title: 'Rechtliches',
          items: [
            { label: 'Impressum', to: '/legal/impressum' },
            { label: 'Datenschutz', to: '/legal/datenschutz' },
          ], 
        }
      ],
      copyright: `© ${new Date().getFullYear()} Facettenschach`,
    },
    prism: {
      theme: prismThemes.github,
      darkTheme: prismThemes.dracula,
    },
  } satisfies Preset.ThemeConfig,
};

export default config;
