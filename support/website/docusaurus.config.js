module.exports = {
  title: 'My Site',
  tagline: 'The tagline of my site',
  url: 'https://remirror.github.io',
  baseUrl: '/template/',
  onBrokenLinks: 'throw',
  onBrokenMarkdownLinks: 'warn',
  favicon: 'img/favicon.ico',
  organizationName: 'remirror', // Usually your GitHub org/user name.
  projectName: 'remirror', // Usually your repo name.
  themeConfig: {
    navbar: {
      title: 'Docs',
      logo: {
        alt: 'Remirror',
        src: 'img/logo.svg',
      },
      items: [
        {
          to: 'docs/contributing',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        { to: 'blog', label: 'Blog', position: 'left' },
        {
          href: 'https://github.com/remirror/remirror',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Community',
          items: [
            {
              label: 'Stack Overflow',
              href: 'https://stackoverflow.com/questions/tagged/remirror',
            },
            {
              label: 'Discord',
              href: 'https://remirror.io/chat',
            },
            {
              label: 'Twitter',
              href: 'https://twitter.com/remirrorio',
            },
          ],
        },
        {
          title: 'More',
          items: [
            {
              label: 'Blog',
              to: 'blog/',
            },
            {
              label: 'GitHub',
              href: 'https://github.com/remirror/remirror',
            },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} Remirror. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          path: '../../docs',
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/remirror/remirror/edit/HEAD/docs/',
        },
        blog: {
          showReadingTime: true,
          // Please change this to your repo.
          editUrl: 'https://github.com/remirror/remirror/edit/HEAD/support/website/blog/',
        },
      },
    ],
  ],
};
