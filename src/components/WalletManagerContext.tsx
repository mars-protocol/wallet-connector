import { getWalletBalances } from "../utils"

export const fetchBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  return await getWalletBalances(address, chainId)
}
