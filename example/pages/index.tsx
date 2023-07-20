import {
  ChainInfoID,
  WalletID,
  WalletManagerProvider,
} from "@marsprotocol/wallet-connector"
import type { NextPage } from "next"
import { useState } from "react"
import ConnectButton from "../components/ConnectButton"

const Home: NextPage = () => {
  const [chainId, setChainId] = useState(ChainInfoID.Neutron)

  return (
    <WalletManagerProvider
      defaultChainId={chainId}
      chainIds={[ChainInfoID.Osmosis1, ChainInfoID.Neutron]}
      enabledWallets={[
        WalletID.Keplr,
        WalletID.Xdefi,
        WalletID.Leap,
        WalletID.Cosmostation,
        WalletID.KeplrMobile,
        WalletID.CosmostationMobile,
      ]}
      noModal={true}
      renderLoader={() => <div>Loading...</div>}
      persistent
    >
      <div className="absolute inset-0 flex flex-wrap content-center justify-center">
        <div className="flex flex-row items-center justify-center w-full gap-2 mb-4">
          <ConnectButton />
        </div>
        <div id="wallet-connector" />
        <div className="flex flex-wrap items-center justify-center w-full gap-2">
          <button
            onClick={() => {
              if (chainId === ChainInfoID.Osmosis1) {
                setChainId(ChainInfoID.Neutron)
              } else {
                setChainId(ChainInfoID.Osmosis1)
              }
            }}
            className="px-3 py-2 bg-blue-400 border-none rounded-md border-gray hover:opacity-70 focus-within:outline-none w-[200px]"
          >
            Change ChainID
          </button>
          <p className="w-full mt-4 text-center">Current chain: {chainId}</p>
        </div>
      </div>
    </WalletManagerProvider>
  )
}

export default Home
