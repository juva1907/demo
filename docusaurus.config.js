// @ts-check
// Note: type annotations allow type checking and IDEs autocompletion

const lightCodeTheme = require("prism-react-renderer/themes/github");
const darkCodeTheme = require("prism-react-renderer/themes/dracula");

/** @type {import('@docusaurus/types').Config} */
const config = {
  title: "Documentation Bemmer",

  tagline: "Des questions ?",
  url: "https://lucky-meerkat-0ff67f.netlify.app/",
  baseUrl: "/",
  onBrokenLinks: "throw",
  onBrokenMarkdownLinks: "warn",
  favicon: "img/favicon.ico",

  // GitHub pages deployment config.
  // If you aren't using GitHub pages, you don't need these.
  organizationName: "https://github.com/juva1907", // Usually your GitHub org/user name.
  projectName: "demo", // Usually your repo name.

  // Even if you don't use internalization, you can use this field to set useful
  // metadata like html lang. For example, if your site is Chinese, you may want
  // to replace "en" with "zh-Hans".
  i18n: {
    defaultLocale: "en",
    locales: ["en"],
  },

  presets: [
    [
      "classic",
      /** @type {import('@docusaurus/preset-classic').Options} */
      ({
        docs: {
          sidebarPath: require.resolve("./sidebars.js"),
          // Please change this to your repo.
          // Remove this to remove the "edit this page" links.
       
        },
        theme: {
          customCss: require.resolve("./src/css/custom.css"),
        },
      }),
    ],
  ],

  themeConfig:
    /** @type {import('@docusaurus/preset-classic').ThemeConfig} */
    ({
      navbar: {
        title: "Documentation Bemmer",
        logo: {
          alt: "My Site Logo",
          src: "img/logo.svg",
        },
        items: [
          {
            type: "doc",
            docId: "Documentation de Beemer",
            position: "left",
            label: "Doc",
          },
        ],
      },
      footer: {
        style: "dark",
        links: [
          {
            title: "Docs",
            items: [
              {
                label: "Tutorial",
                to: "/docs/Documentation de Beemer",
              },
            ],
          },
          {
            title: "Nous contacter",
            items: [
              {
                label: "Contact",
                href: "https://www.treegram.fr/contact/",
              },
              {
                label: "contact@treegram.fr",
                href: "mailto:contact@treegram.fr",
              },
              {
                label: "LinkedIn",
                href: "https://www.linkedin.com/company/treegram/",
              },
            ],
          },
          {
            title: "More",
            items: [
              {
                label: "Treegram",
                href: "https://www.treegram.fr/",
              },
              {
                label: "Youtube",
                href: "https://www.youtube.com/channel/UCEzNukkwh0Y0TR1NOIPym4w",
              },
            ],
          },
        ],
        copyright: `Copyright © ${new Date().getFullYear()} Treegram, Inc.`,
      },
      prism: {
        theme: lightCodeTheme,
        darkTheme: darkCodeTheme,
      },
      
    }),
};

module.exports = config;
