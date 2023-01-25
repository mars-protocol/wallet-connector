import { MsgExecuteContract, useShuttle } from "@delphi-labs/shuttle"
import { createContext, useContext } from "react"

import { BalancesResponse, IWalletManagerContext } from "../types"
import { getWalletBalances } from "../utils"

const fetchBalances = async (
  address: string,
  chainId: string
): Promise<BalancesResponse | undefined> => {
  return await getWalletBalances(address, chainId)
}

const WalletManagerContext = createContext<IWalletManagerContext | null>(null)

const useWalletManager = () => {
  const context = useContext(WalletManagerContext)
  if (!context) {
    throw new Error("You forgot to use WalletManagerProvider.")
  }

  return context
}

const useWallet = useShuttle

export {
  fetchBalances,
  MsgExecuteContract,
  useWallet,
  useWalletManager,
  WalletManagerContext,
}
