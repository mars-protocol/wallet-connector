import { useShuttle } from "@delphi-labs/shuttle"
import { ChainInfoID } from "src/enums"

interface Props {
  setDisconnected: () => void
  setConnectedWallet: () => void
  chainId: ChainInfoID
}

const DisconnectHandler = ({
  setDisconnected,
  setConnectedWallet,
  chainId,
}: Props) => {
  const { disconnectWallet, disconnect, wallets } = useShuttle()

  const recentWallet = wallets?.find((w) => w.network.chainId === chainId)
  if (recentWallet) {
    disconnectWallet(recentWallet)
  } else {
    disconnect()
  }

  setConnectedWallet()
  setDisconnected()

  return null
}

export default DisconnectHandler
