import {
  WalletConnectionStatus,
  useWallet,
  useWalletManager,
} from "@marsprotocol/wallet-connector"
import type { NextPage } from "next"

const Home: NextPage = () => {
  const {
    connect,
    disconnect: terminate,
    status: walletStatus,
  } = useWalletManager()
  const { recentWallet, disconnect } = useWallet()

  const handleDisconnect = () => {
    disconnect()
    terminate()
  }

  return (
    <div className="absolute inset-0 flex items-center justify-center">
      <div className="flex flex-col items-center gap-2 max-w-[90vw] max-h-[90vh]">
        {walletStatus === WalletConnectionStatus.Connected ? (
          <>
            <p className="mb-2">
              <b>{recentWallet?.account.address ?? ""}</b>
            </p>
            <button
              onClick={handleDisconnect}
              className="px-3 py-2 bg-red-600 border-none rounded-md border-gray hover:opacity-70 focus-within:outline-none w-[200px]"
            >
              Disconnect
            </button>
          </>
        ) : (
          <>
            <p className="mb-2">
              <b>Unconnected</b>
            </p>
            <button
              onClick={connect}
              disabled={walletStatus !== WalletConnectionStatus.Unconnected}
              className="px-3 py-2 bg-green-600 border-none rounded-md border-gray hover:opacity-70 focus-within:outline-none w-[200px]"
            >
              {walletStatus === WalletConnectionStatus.Connecting
                ? "Connecting"
                : "Connect"}
            </button>
          </>
        )}
      </div>
    </div>
  )
}

export default Home
