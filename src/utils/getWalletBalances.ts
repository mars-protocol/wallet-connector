import axios from "axios"

import { BalancesResponse } from "../types"
import { getChainInfo } from "../utils"

export const getWalletBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  const chainInfo = getChainInfo(chainId)
  const URI =
    chainInfo.rest.slice(-1) === "/"
      ? "cosmos/bank/v1beta1/balances/"
      : "/cosmos/bank/v1beta1/balances/"
  const URL = `${chainInfo.rest}${URI}${address}`

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
    .catch((err) => console.error(err))
}
