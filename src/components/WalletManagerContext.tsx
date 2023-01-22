import { useShuttle } from "@delphi-labs/shuttle"
import { createContext, useContext } from "react"
import { getWalletBalances } from "src/utils"

export const WalletManagerContext = createContext<IWalletManagerContext | null>(
  null
)

export const useWalletManager = () => {
  const context = useContext(WalletManagerContext)
  if (!context) {
    throw new Error("You forgot to use WalletManagerProvider.")
  }

  return context
}

export const fetchBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  return await getWalletBalances(address, chainId)
}

export const useWallet = useShuttle
