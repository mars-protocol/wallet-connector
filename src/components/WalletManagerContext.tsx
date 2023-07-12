import { CosmWasmClient } from "@cosmjs/cosmwasm-stargate"
import { MsgExecuteContract, useShuttle } from "@delphi-labs/shuttle-react"
import { createContext, useContext } from "react"

import { ChainInfoID } from "../enums"
import { BalancesResponse, IWalletManagerContext } from "../types"
import { getWalletBalances } from "../utils"

const fetchBalances = async (
  address: string,
  chainId: ChainInfoID,
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

const getClient = async (rpc: string) => {
  const rpcURL = rpc.slice(-1) === "/" ? rpc : `${rpc}/`
  const queryClient = await CosmWasmClient.connect(rpcURL)

  return queryClient
}

export {
  fetchBalances,
  getClient,
  MsgExecuteContract,
  useWallet,
  useWalletManager,
  WalletManagerContext,
}
