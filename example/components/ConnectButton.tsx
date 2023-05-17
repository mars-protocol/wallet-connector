import {
  WalletConnectionStatus,
  useWallet,
  useWalletManager,
} from "@marsprotocol/wallet-connector"

export default function ConnectButton() {
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

  if (walletStatus === WalletConnectionStatus.Connected)
    return (
      <div className="flex flex-wrap justify-center w-full">
        <p className="flex justify-center w-full mb-2">
          <b>{recentWallet?.account.address ?? ""}</b>
        </p>
        <button
          onClick={handleDisconnect}
          className="px-3 py-2 bg-red-600 border-none rounded-md border-gray hover:opacity-70 focus-within:outline-none w-[200px]"
        >
          Disconnect
        </button>
      </div>
    )

  return (
    <div className="flex flex-wrap justify-center w-full">
      <p className="flex justify-center w-full mb-2">
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
    </div>
  )
}
