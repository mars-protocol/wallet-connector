import {
  ChainInfoID,
  WalletID,
  WalletManagerProvider,
} from "@marsprotocol/wallet-connector"
import type { AppProps } from "next/app"
import { FunctionComponent } from "react"

import "../styles/globals.css"

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const PageComponent = Component as any

  return (
    <WalletManagerProvider
      defaultChainId={ChainInfoID.Osmosis1}
      enabledWallets={[
        WalletID.Keplr,
        WalletID.Xdefi,
        WalletID.StationWallet,
        WalletID.Leap,
        WalletID.Cosmostation,
        WalletID.KeplrMobile,
        WalletID.CosmostationMobile,
      ]}
      renderLoader={() => <div>Loading...</div>}
      persistent
    >
      <PageComponent {...pageProps} />
    </WalletManagerProvider>
  )
}

export default MyApp
