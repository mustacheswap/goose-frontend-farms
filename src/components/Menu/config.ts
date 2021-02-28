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
        href: 'https://exchange.taco.finance/#/swap?outputCurrency=0x9066e87Bac891409D690cfEfA41379b34af06391',
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.taco.finance/#/add/0xe9e7CEA3DedcA5984780Bafc599bD69ADd087D56/0x9066e87Bac891409D690cfEfA41379b34af06391',
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
        href: 'https://pancakeswap.info/token/0x9066e87Bac891409D690cfEfA41379b34af06391',
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
        href: 'https://app.astrotools.io/pancake-pair-explorer/0x3BB3B98c0FABE30166E6B7D62aEef393249871E4', // taco-busd
      },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Forked from audited Goosedefi',
      //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
      // },
      {
        label: 'Github',
        href: 'https://github.com/tacofinance/',
      },
      {
        label: 'Docs',
        href: 'https://taco-finance.gitbook.io/taco-finance/',
      },
      {
        label: 'Blog',
        href: 'https://taco-finance.medium.com/',
      },
    ],
  },
  // {
  //   label: 'Forked from audited Goosedefi',
  //   icon: 'AuditIcon',
  //   href: 'https://www.goosedefi.com/files/hackenAudit.pdf',
  // },
]

export default config
