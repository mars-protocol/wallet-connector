import type { AppProps } from "next/app"
import { FunctionComponent } from "react"

import "../styles/globals.css"

const MyApp: FunctionComponent<AppProps> = ({ Component, pageProps }) => {
  const PageComponent = Component as any

  return <PageComponent {...pageProps} />
}

export default MyApp
