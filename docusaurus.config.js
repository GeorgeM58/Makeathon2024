const lightCodeTheme = require('prism-react-renderer/themes/github');
const darkCodeTheme = require('prism-react-renderer/themes/dracula');

module.exports = {
  title: 'Metro Mania',
  favicon: 'img/metro_mania.png',
  url: 'https://fwefewuinuiewf.com',
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
      title: 'Metro Mania',
      logo: {
        alt: 'My Site Logo',
        src: 'img/metro_mania.png',
      },
      items: [
        {
          to: '/about_us',
          label: 'About Us',
          position: 'left',
        },
        {
          to: '/projects',
          label: 'Projects',
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
          href: 'https://github.com/GeorgeM58/Makeathon2024',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    prism: {
      theme: lightCodeTheme,
      darkTheme: darkCodeTheme,
    },
  },
};