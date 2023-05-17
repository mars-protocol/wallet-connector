import { useShuttle } from "@delphi-labs/shuttle"
import { useEffect } from "react"

interface Props {
  setConnected: () => void
}

const AutoConnectHandler = ({ setConnected }: Props) => {
  const { connect, recentWallet, providers } = useShuttle()

  useEffect(() => {
    if (recentWallet === null) return

    const recentProvider = providers.find(
      (p) => p.id === recentWallet.providerId
    )

    if (recentProvider?.initialized) {
      recentProvider
        .connect({ chainId: recentWallet.network.chainId })
        .then(setConnected)
    }
  }, [connect, recentWallet, providers, setConnected])

  return null
}

export default AutoConnectHandler
