import { useShuttle } from "@delphi-labs/shuttle"
import { ChainInfoID } from "src/enums"

interface Props {
  setDisconnected: () => void
  chainId: ChainInfoID
}

const DisconnectHandler = ({ setDisconnected, chainId }: Props) => {
  const { disconnectWallet, disconnect, wallets } = useShuttle()

  const recentWallet = wallets?.find((w) => w.network.chainId === chainId)
  if (recentWallet) {
    disconnectWallet(recentWallet)
  } else {
    disconnect()
  }

  setDisconnected()

  return null
}

export default DisconnectHandler
