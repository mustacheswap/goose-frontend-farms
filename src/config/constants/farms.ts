import contracts from './contracts'
import { FarmConfig, QuoteToken } from './types'

const MUSTACHE_BUSD_LP_MAINNET = `0x37bc049e55aff4bed7079983f0a172a4d9e3a83f`
const MUSTACHE_BNB_LP_MAINNET = `0x8f281e81d08d05327d4bea789b81c039379745c5`
const MUSTACHE_MAINNET = `0x8D4Fe1B9cAd29A81B15984E5249498219d82d4C9`

const farms: FarmConfig[] = [
  {
    pid: 0,
    risk: 5,
    lpSymbol: 'MUSTACHE-BUSD LP',
    lpAddresses: {
      97: '0x0000000000000000000000000000000000000000',
      56: MUSTACHE_BUSD_LP_MAINNET,
    },
    tokenSymbol: 'MUSTACHE',
    tokenAddresses: {
      97: '0x0000000000000000000000000000000000000000',
      56: MUSTACHE_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 1, 
    risk: 5,
    lpSymbol: 'MUSTACHE-BNB LP',
    lpAddresses: {
      97: '0x01b1405bEF38652468C9f43861010eB73E0AA443',
      56: MUSTACHE_BNB_LP_MAINNET,
    },
    tokenSymbol: 'MUSTACHE',
    tokenAddresses: {
      97: '0x294Bc5a393B8de74f8d389197DA639C5FbDB9A07',
      56: MUSTACHE_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 19, // old pid 2
    risk: 3,
    lpSymbol: 'BNB-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x58F876857a02D6762E0101bb5C46A8c1ED44Dc16', // old v1 address 0x1b96b92314c44b159149f7e0303511fb2fc4774f
    },
    tokenSymbol: 'BNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 3, 
    risk: 3,
    lpSymbol: 'MUSTACHE-USDT LP',
    lpAddresses: {
      97: '',
      56: '0x7b757e1732a5005b626092de7e6d1097569f7d9c', 
    },
    tokenSymbol: 'MUSTACHE',
    tokenAddresses: {
      97: '',
      56: MUSTACHE_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.USDT,
    quoteTokenAdresses: contracts.usdt,
  },
  {
    pid: 4, 
    risk: 3,
    lpSymbol: 'MUSTACHE-USDC LP',
    lpAddresses: {
      97: '',
      56: '0x74e10c25fc0a1848fed1ad399a3bd0154cc307e8', 
    },
    tokenSymbol: 'MUSTACHE',
    tokenAddresses: {
      97: '',
      56: MUSTACHE_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.USDC,
    quoteTokenAdresses: contracts.usdc,
  },
  {
    pid: 20, // old pid 5
    risk: 1,
    lpSymbol: 'USDT-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x7EFaEf62fDdCCa950418312c6C91Aef321375A00', // old v1 address 0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059ff775485246999027b3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 21, // old pid 6
    risk: 2,
    lpSymbol: 'ETH-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x74E4716E431f45807DCF19f284c7aA99F18a4fbc', // old v1 address 0x70d8929d04b60af4fb9b58713ebcf18765ade422
    },
    tokenSymbol: 'ETH',
    tokenAddresses: {
      97: '',
      56: '0x2170ed0880ac9a755fd29b2688956bd959f933f8',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 22, // old pid 7
    risk: 1,
    lpSymbol: 'USDC-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x2354ef4DF11afacb85a5C7f98B624072ECcddbB1', // old v1 address 0x680dd100e4b394bda26a59dd5c119a391e747d18
    },
    tokenSymbol: 'USDC',
    tokenAddresses: {
      97: '',
      56: '0x8ac76a51cc950d9822d68b83fe1ad97b32cd580d',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 23, // old pid 8
    risk: 3,
    lpSymbol: 'DOT-BNB LP',
    lpAddresses: {
      97: '',
      56: '0xDd5bAd8f8b360d76d12FdA230F8BAF42fe0022CF', // old v1 address 0xbcd62661a6b1ded703585d3af7d7649ef4dcdb5c
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  {
    pid: 24, // old pid 9
    risk: 4,
    lpSymbol: 'CAKE-BUSD LP',
    lpAddresses: {
      97: '',
      56: '0x804678fa97d91b974ec2af3c843270886528a9e6', // old v1 address 0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 25, // old pid 10
    risk: 4,
    lpSymbol: 'CAKE-BNB LP',
    lpAddresses: {
      97: '',
      56: '0x0eD7e52944161450477ee417DE9Cd3a859b14fD0', // old v1 address 0xa527a61703d82139f8a06bc30097cc9caa2df5a6
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BNB,
    quoteTokenAdresses: contracts.wbnb,
  },
  // TODO: CHECK POOLS https://github.com/VikingDefi/viking-frontend-farms/blob/master/src/config/constants/farms.ts
  // pools
  {
    pid: 11, 
    risk: 5,
    isTokenOnly: true,
    lpSymbol: 'MUSTACHE',
    lpAddresses: {
      97: '',
      56: MUSTACHE_BUSD_LP_MAINNET, // MUSTACHE-BUSD LP
    },
    tokenSymbol: 'MUSTACHE',
    tokenAddresses: {
      97: '',
      56: MUSTACHE_MAINNET,
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 12, 
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'BUSD',
    lpAddresses: {
      97: '',
      56: MUSTACHE_BUSD_LP_MAINNET, // MUSTACHE-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'BUSD',
    tokenAddresses: {
      97: '',
      56: '0xe9e7cea3dedca5984780bafc599bd69add087d56',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 13,
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'WBNB',
    lpAddresses: {
      97: '',
      56: '0x1b96b92314c44b159149f7e0303511fb2fc4774f', // BNB-BUSD LP
    },
    tokenSymbol: 'WBNB',
    tokenAddresses: {
      97: '',
      56: '0xbb4cdb9cbd36b01bd1cbaebf2de08d9173bc095c',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 14, 
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'EGG',
    lpAddresses: {
      97: '',
      56: '0x19e7cbecdd23a16dfa5573df54d98f7caae03019', // EGG-BUSD LP (BUSD-BUSD will ignore)
    },
    tokenSymbol: 'EGG',
    tokenAddresses: {
      97: '',
      56: '0xf952fc3ca7325cc27d15885d37117676d25bfda6',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 15, 
    risk: 3,
    isTokenOnly: true,
    lpSymbol: 'DOT',
    lpAddresses: {
      97: '',
      56: '0x54c1ec2f543966953f2f7564692606ea7d5a184e', // DOT-BUSD LP
    },
    tokenSymbol: 'DOT',
    tokenAddresses: {
      97: '',
      56: '0x7083609fce4d1d8dc0c979aab8c869ea2c873402',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 16, 
    risk: 4,
    isTokenOnly: true,
    lpSymbol: 'CAKE',
    lpAddresses: {
      97: '',
      56: '0x0ed8e0a2d99643e1e65cca22ed4424090b8b7458', // CAKE-BUSD LP
    },
    tokenSymbol: 'CAKE',
    tokenAddresses: {
      97: '',
      56: '0x0e09fabb73bd3ade0a17ecc321fd13a19e81ce82',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 17, 
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'USDT',
    lpAddresses: {
      97: '',
      56: '0xc15fa3e22c912a276550f3e5fe3b0deb87b55acd', // USDT-BUSD LP
    },
    tokenSymbol: 'USDT',
    tokenAddresses: {
      97: '',
      56: '0x55d398326f99059fF775485246999027B3197955',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
  {
    pid: 18, 
    risk: 1,
    isTokenOnly: true,
    lpSymbol: 'DAI',
    lpAddresses: {
      97: '',
      56: '0x66FDB2eCCfB58cF098eaa419e5EfDe841368e489', // DAI-BUSD LP
    },
    tokenSymbol: 'DAI',
    tokenAddresses: {
      97: '',
      56: '0x1af3f329e8be154074d8769d1ffa4ee058b1dbc3',
    },
    quoteTokenSymbol: QuoteToken.BUSD,
    quoteTokenAdresses: contracts.busd,
  },
]

export default farms
