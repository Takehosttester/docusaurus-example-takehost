module.exports = {
  title: 'Edy',
  tagline: 'Documentation website',
  url: 'https://takehosttester.github.io',
  baseUrl: '/docusaurus-example-takehost/', // CRITICAL: Added this line
  onBrokenLinks: 'throw',
  favicon: 'img/favicon.ico',
  organizationName: 'takehosttester', 
  projectName: 'docusaurus-example-takehost', 
  trailingSlash: false, // Recommended for GitHub Pages
  themeConfig: {
    navbar: {
      title: 'EDY',
      logo: {
        alt: 'My Site Logo',
        src: 'img/logo.png',
      },
      items: [
        {
          to: 'docs/',
          activeBasePath: 'docs',
          label: 'Docs',
          position: 'left',
        },
        {to: 'blog', label: 'Blog', position: 'left'},
        {
          href: 'https://github.com/takehosttester/docusaurus-example-takehost',
          label: 'GitHub',
          position: 'right',
        },
      ],
    },
    algolia: {
      apiKey: 'e44c59d36394a26b1616e631a1c9d197',
      indexName: 'edy',
      appId: 'HXJSB0I3EO',
    },
    footer: {
      style: 'dark',
      links: [
        {
          title: 'Documentation',
          items: [
            { label: 'Style Guide', to: 'docs/' },
            { label: 'Second Doc', to: 'docs/doc2/' },
          ],
        },
        {
          title: 'Community',
          items: [
            { label: 'Stack Overflow', href: 'https://stackoverflow.com/questions/tagged/docusaurus' },
            { label: 'Discord', href: 'https://discordapp.com/invite/docusaurus' },
          ],
        },
        {
          title: 'More',
          items: [
            { label: 'Blog', to: 'blog' },
            { label: 'GitHub', href: 'https://github.com/takehosttester/docusaurus-example-takehost' },
          ],
        },
      ],
      copyright: `Copyright © ${new Date().getFullYear()} EDY, Inc. Built with Docusaurus.`,
    },
  },
  presets: [
    [
      '@docusaurus/preset-classic',
      {
        docs: {
          sidebarPath: require.resolve('./sidebars.js'),
          editUrl: 'https://github.com/takehosttester/docusaurus-example-takehost/edit/main/',
        },
        blog: {
          showReadingTime: true,
          editUrl: 'https://github.com/takehosttester/docusaurus-example-takehost/edit/main/blog/',
        },
        theme: {
          customCss: require.resolve('./src/css/custom.css'),
        },
      },
    ],
  ],
};