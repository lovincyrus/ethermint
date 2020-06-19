module.exports = {
  theme: 'cosmos',
  title: 'Ethermint Documentation',
  head: [
    [
      'link',
      {
        rel: 'stylesheet',
        type: 'text/css',
        href: 'https://cloud.typography.com/6138116/7255612/css/fonts.css'
      }
    ],
  ],
  locales: {
    '/': {
      lang: 'en-US'
    },
  },
  base: process.env.VUEPRESS_BASE || '/',
  themeConfig: {
    repo: 'cosmos/ethermint',
    docsRepo: 'cosmos/ethermint',
    docsDir: 'docs',
    editLinks: true,
    label: 'ethermint',
    custom: true,
    autoSidebar: true,
    algolia: {
      id: 'BH4D9OD16A',
      key: 'ac317234e6a42074175369b2f42e9754',
      index: 'ethermint'
    },
    sidebar: [
      {
        title: 'Introduction',
        children: [
          {
            title: 'High-Level Overview',
            path: '/intro/overview.html'
          },
          {
            title: 'Architecture',
            path: '/intro/architecture.html'
          }
        ]
      },
      {
        title: 'Basics',
        children: [
          {
            title: 'Accounts',
            path: '/basics/accounts.html'
          },
          {
            title: 'Transactions',
            path: '/basics/transactions.html'
          },
          {
            title: 'Gas',
            path: '/basics/gas.html'
          }
        ]
      },
      {
        title: 'Core Concepts',
        children: [
          {
            title: 'Encoding',
            path: '/core/encoding.html'
          },
          {
            title: 'Events',
            path: '/core/events.html'
          },
        ]
      },
      {
        title: 'Guides',
        children: [
          {
            title: 'Clients',
            path: '/clients'
          }
        ]
      },
      {
        title: 'Specifications',
        children: [
          {
            title: 'Modules',
            directory: true,
            path: '/modules'
          }
        ]
      },
      {
        title: 'Resources',
        children: [
          {
            title: 'Ethermint API Reference',
            path: 'https://godoc.org/github.com/cosmos/ethermint'
          },
          {
            title: 'Cosmos REST API Spec',
            path: 'https://cosmos.network/rpc/'
          },
          {
            title: 'Ethereum JSON RPC API Reference',
            path: 'https://eth.wiki/json-rpc/API'
          }
        ]
      }
    ],
    gutter: {
      title: 'Help & Support',
      editLink: true,
      chat: {
        title: 'Discord',
        text: 'Chat with Cosmos developers on Discord.',
        url: 'https://discordapp.com/channels/669268347736686612',
        bg: 'linear-gradient(225.11deg, #2E3148 0%, #161931 95.68%)'
      },
      forum: {
        title: 'Cosmos SDK Forum',
        text: 'Join the SDK Developer Forum to learn more.',
        url: 'https://forum.cosmos.network/',
        bg: 'linear-gradient(225deg, #46509F -1.08%, #2F3564 95.88%)',
        logo: 'cosmos'
      },
      github: {
        title: 'Found an Issue?',
        text: 'Help us improve this page by suggesting edits on GitHub.'
      }
    },
    footer: {
      questionsText: 'Chat with Cosmos developers on [Discord](https://discord.gg/W8trcGV) or reach out on the [SDK Developer Forum](https://forum.cosmos.network/) to learn more.',
      logo: '/logo-bw.svg',
      textLink: {
        text: 'cosmos.network',
        url: 'https://cosmos.network'
      },
      services: [
        {
          service: 'medium',
          url: 'https://blog.cosmos.network/'
        },
        {
          service: 'twitter',
          url: 'https://twitter.com/cosmos'
        },
        {
          service: 'reddit',
          url: 'https://reddit.com/r/cosmosnetwork'
        },
        {
          service: 'telegram',
          url: 'https://t.me/cosmosproject'
        },
        {
          service: 'youtube',
          url: 'https://www.youtube.com/c/CosmosProject'
        }
      ],
      smallprint:
          'This website is maintained by Chainsafe Systems Inc. The contents and opinions of this website are those of Chainsafe Systems Inc.',
      links: [
        {
          title: 'Documentation',
          children: [
            {
              title: 'Cosmos SDK',
              url: 'https://cosmos.network/docs'
            },
            {
              title: 'Ethermint',
              url: 'https://ethermint.zone/'
            },
            {
              title: 'Cosmos Hub',
              url: 'https://hub.cosmos.network/'
            },
            {
              title: 'Tendermint Core',
              url: 'https://docs.tendermint.com/'
            }
          ]
        },
        {
          title: 'Community',
          children: [
            {
              title: 'Cosmos blog',
              url: 'https://blog.cosmos.network/'
            },
            {
              title: 'Forum',
              url: 'https://forum.cosmos.network/'
            },
            {
              title: 'Chat',
              url: 'https://riot.im/app/#/room/#cosmos-sdk:matrix.org'
            }
          ]
        },
        {
          title: 'Contributing',
          children: [
            {
              title: 'Contributing to the docs',
              url:
                  'https://github.com/cosmos/ethermint/blob/master/docs/DOCS_README.md'
            },
            {
              title: 'Source code on GitHub',
              url: 'https://github.com/cosmos/ethermint/'
            }
          ]
        }
      ]
    }
  },
  plugins: [
    [
      '@vuepress/google-analytics',
      {
        ga: 'UA-51029217-12'
      }
    ],
    [
      'sitemap',
      {
        hostname: 'https://docs.cosmos.network'
      }
    ]
  ]
};
