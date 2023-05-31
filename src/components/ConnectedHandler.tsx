import { useShuttle, WalletConnection } from "@delphi-labs/shuttle"
import { useEffect } from "react"
import { ChainInfoID } from "src/enums"

interface Props {
  setConnectedWallet: (recentWallet: WalletConnection | undefined) => void
  chainId: ChainInfoID
  connectedWallet?: WalletConnection
}

const ConnectedHandler = ({
  setConnectedWallet,
  chainId,
  connectedWallet,
}: Props) => {
  const { wallets, recentWallet } = useShuttle()

  useEffect(() => {
    if (wallets === null || !recentWallet) return
    if (connectedWallet?.account.address === recentWallet.account.address)
      return
    const currentWallet =
      recentWallet.network.chainId === chainId
        ? recentWallet
        : wallets.find((w) => w.network.chainId === chainId)
    setConnectedWallet(currentWallet)
  }, [wallets, recentWallet, setConnectedWallet, chainId, connectedWallet])

  return null
}

export default ConnectedHandler
