const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'George Maidhof',
  favicon: 'img/gpm.png',
  url: 'https://george_ece_maidhof.com',
  baseUrl: '/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/facebook/docusaurus/edit/main/website/blog/',
        },
      },
    ],
  ],
  themeConfig: {
    layout: {
      component: require.resolve('./src/theme/CustomLayout.js'),
    },
    navbar: {
      title: 'George Maidhof',
      logo: {
        alt: 'My Site Logo',
        src: 'img/gpm.png',
      },
      items: [
        {
          to: '/about_me',
          label: 'About Me',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
          position: 'left',
        },
        {
          to: '/resume',
          label: 'Resume',
          position: 'left',
        },
        {
          to: '/photos',
          label: 'Photos',
          position: 'left',
        },
        {
          to: '/contact_info',
          label: 'Contact Info',
          position: 'left',
        },
        {
          href: 'https://github.com/GeorgeM58',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    /*
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Docs',
          items: [
            {
              label: 'Tutorial',
              to: '/docs/intro',
            },
          ],
        },
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/docusaurus',
            },
            {
              label: 'Discord',
              href: 'https://discordapp.com/invite/docusaurus',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/docusaurus',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: '/blog',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/facebook/docusaurus',
            },
          ],
        },
      ],
    },
    */
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};