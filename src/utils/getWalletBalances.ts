import axios from "axios"
import { ChainInfoID } from "src/enums"

import { BalancesResponse } from "../types"
import { getChainInfo } from "../utils"

export const getWalletBalances = async (
  address: string,
  chainId: ChainInfoID
): Promise<BalancesResponse | undefined> => {
  const chainInfo = getChainInfo(chainId)
  const uri =
    chainInfo.rest.slice(-1) === "/"
      ? "cosmos/bank/v1beta1/balances/"
      : "/cosmos/bank/v1beta1/balances/"
  const url = `${chainInfo.rest}${uri}${address}`

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
