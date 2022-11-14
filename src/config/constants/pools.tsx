import { BigNumber } from '@ethersproject/bignumber'
import Trans from 'components/Trans'
import { VaultKey } from 'state/types'
import { serializeTokens } from 'utils/serializeTokens'
import { briseToken } from './tokens'
import { SerializedPoolConfig, PoolCategory } from './types'

const serializedTokens = serializeTokens(briseToken)

export const MAX_LOCK_DURATION = 31536000
export const UNLOCK_FREE_DURATION = 604800
export const ONE_WEEK_DEFAULT = 604800
export const BOOST_WEIGHT = BigNumber.from('1000000000000')
export const DURATION_FACTOR = BigNumber.from('31536000')

export const vaultPoolConfig = {
  [VaultKey.CakeVaultV1]: {
    name: <Trans>Auto RICE</Trans>,
    description: <Trans>Automatic restaking</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.CakeVault]: {
    name: <Trans>Stake RICE</Trans>,
    description: <Trans>Stake, Earn – And more!</Trans>,
    autoCompoundFrequency: 5000,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: '/images/tokens/autorenew.svg',
    },
  },
  [VaultKey.IfoPool]: {
    name: 'IFO CAKE',
    description: <Trans>Stake CAKE to participate in IFOs</Trans>,
    autoCompoundFrequency: 1,
    gasLimit: 2000000,
    tokenImage: {
      primarySrc: `/images/tokens/${briseToken.rice.address}.png`,
      secondarySrc: `/images/tokens/ifo-pool-icon.svg`,
    },
  },
} as const

export const livePools: SerializedPoolConfig[] = [
  {
    sousId: 0,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.rice,
    contractAddress: {
      32520: '0x47e6B11Cd7E9664F97E9E570Dd73Cefd934f6E82',
      56: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '10',
    isFinished: false,
  },
  {
    sousId: 1,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.xRice,
    contractAddress: {
      32520: '0x61fa23D4376CF069E484Bcb3C67d4422320C75e9',
      56: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.003',
    isFinished: false,
  },
  {
    sousId: 2,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      32520: '0xEA7cfA5515a31063d4d7130828510e8a876ebe1A',
      56: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '100',
    isFinished: false,
  },
  {
    sousId: 3,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.wbnb,
    contractAddress: {
      32520: '0xD83a7da685180e172512617d45e0ce136ED60167',
      56: '',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '3000',
    isFinished: false,
  },
  // {
  // 	sousId: 3,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.rice,
  // 	contractAddress: {
  // 		32520: '0xDa492E9c88E93dcF18c17f441a1938A746Bf9448',
  // 		56: '',
  // 		97: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '0.06',
  // 	isFinished: false,
  // },
  // {
  // 	sousId: 4,
  // 	stakingToken: serializedTokens.xRice,
  // 	earningToken: serializedTokens.wbnb,
  //   contractAddress: {
  // 		32520: '0xd2E9aE5178E9eeba6857a20Aef93C767B087c6eD',
  // 		56: '',
  // 		97: '',
  // 	},
  // 	poolCategory: PoolCategory.CORE,
  // 	tokenPerBlock: '100',
  // 	isFinished: false,
  // },
]

// known finished pools
const finishedPools = [
  /* {
    sousId: 285,
    stakingToken: serializedTokens.rice,
    earningToken: serializedTokens.sdao,
    contractAddress: {
      32520: '',
      56: '0x168eF2e470bfeAEB32BE52FB218A41483904851c',
      97: '',
    },
    poolCategory: PoolCategory.CORE,
    tokenPerBlock: '0.405',
    version: 3,
  }, */
].map((p) => ({ ...p, isFinished: true }))

export default [...livePools, ...finishedPools]
