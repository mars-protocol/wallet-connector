import axios from "axios"
import { ChainInfoID } from "src/enums"
import { SimpleChainInfoList, SimplifiedChainInfo } from "src/utils"

export const getWalletBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  const realChainID: ChainInfoID =
    ChainInfoID[chainId as keyof typeof ChainInfoID]
  const chainInfo: SimplifiedChainInfo = SimpleChainInfoList[realChainID]
  const URL = `${chainInfo.rest}cosmos/bank/v1beta1/balances/${address}`

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
