import {
  WalletConnectionStatus,
  useWallet,
  useWalletManager,
} from "@marsprotocol/wallet-connector"
import { useEffect, useState } from "react"

export default function ConnectButton() {
  const {
    connect,
    disconnect: terminate,
    status: walletStatus,
  } = useWalletManager()
  const { recentWallet, disconnect } = useWallet()
  const [isConnected, setIsConnected] = useState(false)

  const handleDisconnect = () => {
    disconnect()
    terminate()
  }

  useEffect(() => {
    setIsConnected(walletStatus === WalletConnectionStatus.Connected)
  }, [walletStatus])

  return (
    <div className="flex flex-wrap justify-center w-full">
      <p className="w-full mb-2 text-center">
        <b>
          {isConnected ? recentWallet?.account.address ?? "" : "Not connected"}
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
