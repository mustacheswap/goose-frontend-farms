import { MenuEntry } from '@pancakeswap-libs/uikit'

const config: MenuEntry[] = [
  {
    label: 'Home',
    icon: 'HomeIcon',
    href: '/',
  },
  {
    label: 'Trade',
    icon: 'TradeIcon',
    items: [
      {
        label: 'Exchange',
        href: 'https://exchange.mustacheswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'https://exchange.mustacheswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Barber',
    icon: 'PoolIcon',
    href: '/barber',
  },
  // {
  //   label: 'Pools',
  //   icon: 'PoolIcon',
  //   href: '/pools',
  // },
  // {
  //   label: 'Lottery',
  //   icon: 'TicketIcon',
  //   href: '/lottery',
  // },
  // {
  //   label: 'NFT',
  //   icon: 'NftIcon',
  //   href: '/nft',
  // },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0xF952Fc3ca7325Cc27D15885d37117676d25BfdA6',
      },
      {
        label: 'CoinGecko',
        href: 'https://www.coingecko.com/en/coins/mustache-finance',
      },
      {
        label: 'CoinMarketCap',
        href: 'https://coinmarketcap.com/currencies/mustache-finance/',
      },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/',
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      //{
      // label: 'Hacken Audit',
      // href: 'https://mustacheswap.com/files/xx.pdf',
      // },
      {
        label: 'Github',
        href: 'https://github.com/mustacheswap/',
      },
      {
        label: 'Docs',
        href: 'https://mustacheswap.gitbook.io/mustacheswap/',
      },
      {
        label: 'Blog',
        href: 'https://mustacheswap.medium.com/',
      },
    ],
  },
  {
   // label: 'Partnerships/IFO',
   // icon: 'GooseIcon',
   // href: 'https://docs.google.com/forms/d/e/1FAIpQLSe7ycrw8Dq4C5Vjc9WNlRtTxEhFDB1Ny6jlAByZ2Y6qBo7SKg/viewform?usp=sf_link',
  //},
  // {
   // label: 'Audit by Hacken',
   // icon: 'AuditIcon',
   // href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  //},
 // {
  //  label: 'Audit by CertiK',
  //  icon: 'AuditIcon',
  //  href: 'https://certik.org/projects/goose-finance',
  // },
]

export default config
