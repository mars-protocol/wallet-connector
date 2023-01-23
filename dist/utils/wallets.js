"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = exports.XdefiWallet = exports.TerraStationWallet = exports.LeapWallet = exports.KeplrWallet = exports.FalconWallet = exports.CosmostationWallet = void 0;
const shuttle_1 = require("@delphi-labs/shuttle");
const enums_1 = require("../enums");
exports.CosmostationWallet = {
    id: enums_1.WalletID.Cosmostation,
    name: "Cosmostation Wallet",
    install: "Install Cosmostation Wallet",
    installURL: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
    description: "Cosmostation Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",
    provider: shuttle_1.CosmostationProvider,
};
exports.FalconWallet = {
    id: enums_1.WalletID.Falcon,
    name: "Falcon Wallet",
    install: "Install Falcon Wallet",
    installURL: "https://chrome.google.com/webstore/detail/falcon-wallet/gkhnjcpkikkkfhhdhhphcbhmkikoicgn",
    description: "Falcon Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/falcon-wallet-extension.png",
    provider: shuttle_1.FalconProvider,
};
exports.KeplrWallet = {
    id: enums_1.WalletID.Keplr,
    name: "Keplr Wallet",
    install: "Install Keplr Wallet",
    installURL: "https://www.keplr.app/download",
    description: "Keplr Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-extension.png",
    provider: shuttle_1.KeplrProvider,
};
exports.LeapWallet = {
    id: enums_1.WalletID.Leap,
    name: "Leap Wallet",
    install: "Install Leap Wallet",
    installURL: "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
    description: "Leap Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/leap-wallet-extension.png",
    provider: shuttle_1.LeapCosmosProvider,
};
exports.TerraStationWallet = {
    id: enums_1.WalletID.TerraStation,
    name: "Terra Station Wallet",
    install: "Install Terra Station Wallet",
    installURL: "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",
    description: "Terra Station Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/terra-station-wallet-extension.png",
    provider: shuttle_1.TerraStationProvider,
};
exports.XdefiWallet = {
    id: enums_1.WalletID.Xdefi,
    name: "XDEFI Wallet",
    install: "Install XDEFI Wallet",
    installURL: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
    description: "XDEFI Extension",
    imageUrl: "https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/xdefi-wallet-extension.png",
    provider: shuttle_1.XDefiProvider,
};
exports.Wallets = [
    exports.CosmostationWallet,
    exports.FalconWallet,
    exports.KeplrWallet,
    exports.LeapWallet,
    exports.TerraStationWallet,
    exports.XdefiWallet,
];
//# sourceMappingURL=wallets.js.map