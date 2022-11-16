"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ChainInfoID = exports.WalletConnectionStatus = exports.WalletType = void 0;
var WalletType;
(function (WalletType) {
    WalletType["Keplr"] = "keplr";
    WalletType["Leap"] = "leap";
    WalletType["WalletConnectKeplr"] = "walletconnect_keplr";
})(WalletType = exports.WalletType || (exports.WalletType = {}));
var WalletConnectionStatus;
(function (WalletConnectionStatus) {
    WalletConnectionStatus[WalletConnectionStatus["Initializing"] = 0] = "Initializing";
    WalletConnectionStatus[WalletConnectionStatus["AttemptingAutoConnection"] = 1] = "AttemptingAutoConnection";
    // Don't call connect until this state is reached.
    WalletConnectionStatus[WalletConnectionStatus["ReadyForConnection"] = 2] = "ReadyForConnection";
    WalletConnectionStatus[WalletConnectionStatus["Connecting"] = 3] = "Connecting";
    WalletConnectionStatus[WalletConnectionStatus["Connected"] = 4] = "Connected";
    WalletConnectionStatus[WalletConnectionStatus["Resetting"] = 5] = "Resetting";
    WalletConnectionStatus[WalletConnectionStatus["Errored"] = 6] = "Errored";
})(WalletConnectionStatus = exports.WalletConnectionStatus || (exports.WalletConnectionStatus = {}));
var ChainInfoID;
(function (ChainInfoID) {
    ChainInfoID["Osmosis1"] = "osmosis-1";
    ChainInfoID["OsmosisTestnet"] = "osmo-test-4";
    ChainInfoID["Cosmoshub4"] = "cosmoshub-4";
    ChainInfoID["Columbus5"] = "columbus-5";
    ChainInfoID["Secret4"] = "secret-4";
    ChainInfoID["Akashnet2"] = "akashnet-2";
    ChainInfoID["Regen1"] = "regen-1";
    ChainInfoID["Sentinelhub2"] = "sentinelhub-2";
    ChainInfoID["Core1"] = "core-1";
    ChainInfoID["Irishub1"] = "irishub-1";
    ChainInfoID["CryptoOrgChainMainnet1"] = "crypto-org-chain-mainnet-1";
    ChainInfoID["IovMainnetIbc"] = "iov-mainnet-ibc";
    ChainInfoID["Emoney3"] = "emoney-3";
    ChainInfoID["Juno1"] = "juno-1";
    ChainInfoID["Uni3"] = "uni-3";
    ChainInfoID["Mars1"] = "mars-1";
    ChainInfoID["MarsAres1"] = "ares-1";
    ChainInfoID["Microtick1"] = "microtick-1";
    ChainInfoID["LikecoinMainnet2"] = "likecoin-mainnet-2";
    ChainInfoID["Impacthub3"] = "impacthub-3";
    ChainInfoID["Bitcanna1"] = "bitcanna-1";
    ChainInfoID["Bitsong2b"] = "bitsong-2b";
    ChainInfoID["Kichain2"] = "kichain-2";
    ChainInfoID["Panacea3"] = "panacea-3";
    ChainInfoID["Bostrom"] = "bostrom";
    ChainInfoID["Comdex1"] = "comdex-1";
    ChainInfoID["CheqdMainnet1"] = "cheqd-mainnet-1";
    ChainInfoID["Stargaze1"] = "stargaze-1";
    ChainInfoID["Chihuahua1"] = "chihuahua-1";
    ChainInfoID["LumNetwork1"] = "lum-network-1";
    ChainInfoID["Vidulum1"] = "vidulum-1";
    ChainInfoID["DesmosMainnet"] = "desmos-mainnet";
    ChainInfoID["Dig1"] = "dig-1";
    ChainInfoID["Sommelier3"] = "sommelier-3";
    ChainInfoID["Sifchain1"] = "sifchain-1";
    ChainInfoID["LaoziMainnet"] = "laozi-mainnet";
    ChainInfoID["Darchub"] = "darchub";
    ChainInfoID["Umee1"] = "umee-1";
    ChainInfoID["GravityBridge3"] = "gravity-bridge-3";
    ChainInfoID["Mainnet3"] = "mainnet-3";
    ChainInfoID["Shentu22"] = "shentu-2.2";
    ChainInfoID["Carbon1"] = "carbon-1";
    ChainInfoID["Injective1"] = "injective-1";
    ChainInfoID["CerberusChain1"] = "cerberus-chain-1";
    ChainInfoID["Fetchhub4"] = "fetchhub-4";
    ChainInfoID["Mantle1"] = "mantle-1";
    ChainInfoID["PioMainnet1"] = "pio-mainnet-1";
    ChainInfoID["Galaxy1"] = "galaxy-1";
    ChainInfoID["Meme1"] = "meme-1";
    ChainInfoID["Evmos_9001_2"] = "evmos_9001-2";
    ChainInfoID["Phoenix1"] = "phoenix-1";
    ChainInfoID["Titan1"] = "titan-1";
    ChainInfoID["Kava_2222_10"] = "kava_2222-10";
    ChainInfoID["Genesis_29_2"] = "genesis_29-2";
})(ChainInfoID = exports.ChainInfoID || (exports.ChainInfoID = {}));
//# sourceMappingURL=types.js.map