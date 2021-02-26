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
        href: 'http://exchange.tacoswap.com/',
      },
      {
        label: 'Liquidity',
        href: 'http://exchange.tacoswap.com/#/pool',
      },
    ],
  },
  {
    label: 'Farms',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Trucks',
    icon: 'PoolIcon',
    href: '/trucks',
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
        href: 'https://pancakeswap.info/token/0xEF5338ad66Ca3d32c15a2E95F5F6818fDb57dd32',
      },
      // {
      //   label: 'CoinGecko',
      //   href: 'https://www.coingecko.com/en/coins/taco-finance',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/taco-finance/',
      // },
      {
        label: 'AstroTools',
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x29B16D0Db50FD81B37a60E171B8b5025717A2533', // taco-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      {
        label: 'Forked from audited Goosedefi',
        href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
      },
      {
        label: 'Github',
        href: 'https://github.com/tacofinance/',
      },
      {
        label: 'Docs',
        href: 'https://tacoswap.gitbook.io/taco-finance/',
      },
      {
        label: 'Blog',
        href: 'https://tacofinance.medium.com/',
      },
    ],
  },
  {
    label: 'Forked from audited Goosedefi',
    icon: 'AuditIcon',
    href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  },
]

export default config
