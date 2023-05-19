import { useShuttle } from "@delphi-labs/shuttle"
import { useEffect } from "react"
import { ChainInfoID } from "src/enums"

interface Props {
  setConnected: () => void
  chainId: ChainInfoID
}

const AutoConnectHandler = ({ setConnected, chainId }: Props) => {
  const { connect, providers, wallets } = useShuttle()

  useEffect(() => {
    if (wallets === null) return
    const recentWallet = wallets.find((w) => w.network.chainId === chainId)

    if (!recentWallet) return
    const recentProvider = providers.find(
      (p) => p.id === recentWallet.providerId
    )

    if (recentProvider?.initialized) {
      recentProvider
        .connect({ chainId: recentWallet.network.chainId })
        .then(setConnected)
    }
  }, [connect, wallets, providers, setConnected, chainId])

  return null
}

export default AutoConnectHandler
