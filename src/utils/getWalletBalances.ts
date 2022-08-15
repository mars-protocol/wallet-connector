import axios from "axios"

import { BalancesResponse } from "../types"
import { SimpleChainInfoList } from "../utils"

export const getWalletBalances = async (
  address?: string,
  chainId?: string
): Promise<BalancesResponse | undefined> => {
  if (!address || !chainId) return undefined

  const URL = `${SimpleChainInfoList[chainId].rest}cosmos/bank/v1beta1/balances/${address}`

  return await axios({
    url: URL,
    method: "GET",
    headers: {
      Accept: "application/json",
      "Content-Type": "application/json",
    },
  })
    .then((response) => {
      return response.data
    })
    .catch((err) => console.log(err))
}
