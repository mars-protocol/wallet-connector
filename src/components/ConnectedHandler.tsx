import { useShuttle, WalletConnection } from "@delphi-labs/shuttle"
import { useEffect } from "react"
import { ChainInfoID } from "src/enums"

interface Props {
  setConnectedWallet: (recentWallet: WalletConnection | undefined) => void
  chainId: ChainInfoID
}

const ConnectedHandler = ({ setConnectedWallet, chainId }: Props) => {
  const { wallets } = useShuttle()

  useEffect(() => {
    if (wallets === null) return
    const recentWallet = wallets.find((w) => w.network.chainId === chainId)
    setConnectedWallet(recentWallet)
  }, [wallets, setConnectedWallet, chainId])

  return null
}

export default ConnectedHandler
