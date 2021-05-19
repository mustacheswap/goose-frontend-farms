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
        href: 'https://exchange.mustacheswap.com/#/swap?outputCurrency=0x8D4Fe1B9cAd29A81B15984E5249498219d82d4C9', // fil in
      },
      {
        label: 'Liquidity',
        href:
          'https://exchange.mustacheswap.com/#/add/0x8D4Fe1B9cAd29A81B15984E5249498219d82d4C9/0xe9e7cea3dedca5984780bafc599bd69add087d56', // fill in 
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
  {
    label: 'Lottery (Soon)',
    icon: 'TicketIcon',
    href: '/lottery',
    disabled: true, 
  },
  {
    label: 'CryptoGents NFT (Soon)',
    icon: 'NftIcon',
    href: '/nft',
    disabled: true, 
  },
  {
    label: 'Info',
    icon: 'InfoIcon',
    items: [
      {
        label: 'PancakeSwap',
        href: 'https://pancakeswap.info/token/0x8D4Fe1B9cAd29A81B15984E5249498219d82d4C9',
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
        href: 'https://medium.com/@mustacheswap',
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
