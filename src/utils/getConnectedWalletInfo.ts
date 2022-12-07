import { SigningCosmWasmClientOptions } from "@cosmjs/cosmwasm-stargate"
import { SigningStargateClientOptions } from "@cosmjs/stargate"
import { ChainInfo } from "@keplr-wallet/types"

import { ConnectedWallet, Wallet, WalletClient, WalletType } from "../types"
import { getWalletBalances } from "../utils"

export const getConnectedWalletInfo = async (
  wallet: Wallet,
  client: WalletClient,
  chainInfo: ChainInfo,
  signingCosmWasmClientOptions?: SigningCosmWasmClientOptions,
  signingStargateClientOptions?: SigningStargateClientOptions
): Promise<ConnectedWallet> => {
  try {
    await client.enable(chainInfo.chainId)
  } catch (e) {
    // Don't handle the missing chain as an error, but a warning
    console.warn(e)

    // Only Keplr browser extension supports suggesting chain.
    // Not WalletConnect nor embedded Keplr Mobile web.
    if (wallet.type === WalletType.Keplr && client.mode !== "mobile-web") {
      const info = {
        ...chainInfo,
        stakeCurrency: {
          ...chainInfo.stakeCurrency,
          coinImageUrl: chainInfo.stakeCurrency.coinImageUrl
            ? window.origin + chainInfo.stakeCurrency.coinImageUrl
            : undefined,
        },
        currencies: chainInfo.currencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
        feeCurrencies: chainInfo.feeCurrencies.map((currency) => ({
          ...currency,
          coinImageUrl: currency.coinImageUrl
            ? window.origin + currency.coinImageUrl
            : undefined,
        })),
      }

      await client.experimentalSuggestChain(info)

      try {
        // Chain is now added, retry to enable it
        await client.enable(chainInfo.chainId)
      } catch (e) {
        console.warn(e)
      }
    }
  }

  // Parallelize for efficiency.
  const [{ name, bech32Address: address }, offlineSigner] = await Promise.all([
    // Get name.
    client.getKey(chainInfo.chainId),
    // Get offline signer.
    wallet.getOfflineSignerFunction(client)(chainInfo.chainId),
  ])

  if (address === undefined) {
    throw new Error("Failed to retrieve wallet address.")
  }

  const [signingCosmWasmClient, signingStargateClient] = await Promise.all([
    // Get CosmWasm client.
    await (
      await import("@cosmjs/cosmwasm-stargate")
    ).SigningCosmWasmClient.connectWithSigner(
      chainInfo.rpc,
      offlineSigner,
      signingCosmWasmClientOptions
    ),
    // Get Stargate client.
    await (
      await import("@cosmjs/stargate")
    ).SigningStargateClient.connectWithSigner(
      chainInfo.rpc,
      offlineSigner,
      signingStargateClientOptions
    ),
  ])

  const walletBalances = await getWalletBalances(address, chainInfo.chainId)

  return {
    wallet,
    walletClient: client,
    chainInfo,
    offlineSigner,
    name,
    address,
    walletBalances,
    signingCosmWasmClient,
    signingStargateClient,
  }
}
