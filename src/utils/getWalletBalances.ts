import axios from "axios"

import { BalancesResponse } from "../types"
import { getChainInfo } from "../utils"

export const getWalletBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  const chainInfo = getChainInfo(chainId)
  const url = new URL(`cosmos/bank/v1beta1/balances/${address}`, chainInfo.rest)
    .href

  return await axios({
    url: url,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => console.error(err))
}
