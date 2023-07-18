import { useShuttle, WalletConnection } from "@delphi-labs/shuttle-react"
import { useEffect } from "react"
import { ChainInfoID } from "src/enums"

interface Props {
  setConnected: () => void
  setConnectedWallet: (recentWallet: WalletConnection) => void
  chainId: ChainInfoID
}

const WalletConnectHandler = ({
  setConnected,
  setConnectedWallet,
  chainId,
}: Props) => {
  const { connect, mobileProviders, wallets } = useShuttle()

  useEffect(() => {
    if (wallets === null) return
    const recentWallet = wallets.find((w) => w.network.chainId === chainId)

    if (!recentWallet) return
    if (!recentWallet.providerId.includes("mobile")) return
    const recentProvider = mobileProviders.find(
      (p) => p.id === recentWallet.providerId,
    )

    if (!recentProvider) return
    recentProvider
      .connect({ chainId: recentWallet.network.chainId })
      .then(() => {
        setConnected()
        setConnectedWallet(recentWallet)
      })
  }, [
    connect,
    wallets,
    mobileProviders,
    setConnected,
    setConnectedWallet,
    chainId,
  ])

  return null
}

export default WalletConnectHandler
