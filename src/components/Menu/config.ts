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
        href: 'https://exchange.mustacheswap.com/#/swap?outputCurrency=0x0000000000000000000000000000000000000000', // fil in
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.mustacheswap.com/#/add/0x0000000000000000000000000000000000000000/0x0000000000000000000000000000000000000000', // fill in 
      },
    ],
  },
  {
    label: 'Club',
    icon: 'FarmIcon',
    href: '/farms',
  },
  {
    label: 'Barber',
    icon: 'PoolIcon',
    href: '/Barber',
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
      //   href: 'https://www.coingecko.com/en/coins/mustacheswap',
      // },
      // {
      //   label: 'CoinMarketCap',
      //   href: 'https://coinmarketcap.com/currencies/mustacheswap/',
      // },
      // {
      //   label: 'AstroTools',
      //   href: 'https://app.astrotools.io/pancake-pair-explorer/0x0000000000000000000000000000000000000000', // mustache-busd
      // },
    ],
  },
  {
    label: 'More',
    icon: 'MoreIcon',
    items: [
      // {
      //   label: 'Hacken Audit',
      //   href: 'https://mustacheswap.com/files/x.pdf',
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
  // {
  //   label: 'Hacken Audit',
  //   icon: 'AuditIcon',
  //   href: 'https://mustacheswap.com/files/XX.pdf',
  // },
]

export default config
