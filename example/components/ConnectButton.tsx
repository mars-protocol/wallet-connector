import { WalletConnection } from "@delphi-labs/shuttle"
import {
  ChainInfoID,
  WalletConnectionStatus,
  useWallet,
  useWalletManager,
} from "@marsprotocol/wallet-connector"
import { useEffect, useState } from "react"

interface Props {
  chainId: ChainInfoID
}

export default function ConnectButton(props: Props) {
  const { connect, status: walletStatus, disconnect } = useWalletManager()
  const { wallets } = useWallet()
  const [recentWallet, setRecentWallet] = useState<WalletConnection>()
  const [isConnected, setIsConnected] = useState(false)

  const handleDisconnect = () => {
    disconnect()
  }

  useEffect(() => {
    setRecentWallet(wallets?.find((w) => w.network.chainId === props.chainId))
  }, [wallets, props.chainId])

  useEffect(() => {
    setIsConnected(walletStatus === WalletConnectionStatus.Connected)
  }, [walletStatus])

  return (
    <div className="flex flex-wrap justify-center w-full">
      <p className="w-full mb-2 text-center">
        <b>
          {isConnected && recentWallet
            ? recentWallet?.account.address ?? ""
            : "Not connected"}
        </b>
      </p>
      <button
        onClick={isConnected ? handleDisconnect : connect}
        className={`px-3 py-2 border-none rounded-md hover:opacity-70 focus-within:outline-none w-[200px] ${
          isConnected ? "bg-red-800" : "bg-green-800"
        }`}
      >
        {!isConnected
          ? walletStatus === WalletConnectionStatus.Connecting
            ? "Connecting"
            : "Connect"
          : "Disconnect"}
      </button>
    </div>
  )
}
