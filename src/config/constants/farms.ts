import { serializeTokens } from './tokens'
import { SerializedFarmConfig } from './types'
import { CHAIN_ID } from './networks'

const serializedTokens = serializeTokens()
export const CAKE_BNB_LP_MAINNET = '0xd611F8869A282CfD79723836e061bC118eB40A9b'

const farms: SerializedFarmConfig[] = [
  /**
   * These 3 farms (PID 0, 2, 3) should always be at the top of the file.
   */
  {
    pid: 0,
    v1pid: 0,
    lpSymbol: 'RICE',
    lpAddresses: {
      32520: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      56: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
      97: '0x1eb697Cb6F457F6a65C682F7f7c65F9f2E622A34',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 2,
    v1pid: 2,
    lpSymbol: 'RICE-BRISE LP',
    lpAddresses: {
      32520: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      56: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 9,
    lpSymbol: 'xRICE-BRISE LP',
    lpAddresses: {
      32520: '0x969d4C83969deB4363417C07A7D502A307d0D1D2',
      56: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.xRice,
    quoteToken: serializedTokens.wbnb,
  },
  {
    pid: 5,
    v1pid: 5,
    lpSymbol: 'RICE-xRICE LP',
    lpAddresses: {
      32520: '0x5F3Fa7b0Adb16b0CcE18654A30DA78bc8B2B1542',
      56: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.rice,
    quoteToken: serializedTokens.xRice,
  },
  {
    pid: 8,
    v1pid: 8,
    lpSymbol: 'YPC-WBRISE LP',
    lpAddresses: {
      32520: '0xef2a42261824FF0D52230415D57eE86f9aFC47cC',
      56: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
      97: '0x0xd611F8869A282CfD79723836e061bC118eB40A9b',
    },
    token: serializedTokens.ypc,
    quoteToken: serializedTokens.wbnb,
  },
].filter((f) => !!f.lpAddresses[CHAIN_ID])

export default farms
