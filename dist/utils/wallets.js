"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Wallets = exports.XdefiWallet = exports.TerraStationWallet = exports.LeapWallet = exports.KeplrWallet = exports.FalconWallet = exports.CosmostationWallet = void 0;
const cosmostation_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/cosmostation-wallet-extension.png"));
const falcon_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/falcon-wallet-extension.png"));
const keplr_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/keplr-wallet-extension.png"));
const leap_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/leap-wallet-extension.png"));
const terra_station_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/terra-station-wallet-extension.png"));
const xdefi_wallet_extension_png_1 = __importDefault(require("src/components/ui/images/xdefi-wallet-extension.png"));
const enums_1 = require("src/enums");
exports.CosmostationWallet = {
    id: enums_1.WalletID.Cosmostation,
    name: "Cosmostation Wallet",
    install: "Install Cosmostation Wallet",
    installURL: "https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",
    description: "Cosmostation Extension",
    imageUrl: cosmostation_wallet_extension_png_1.default,
};
exports.FalconWallet = {
    id: enums_1.WalletID.Falcon,
    name: "Falcon Wallet",
    install: "Install Falcon Wallet",
    installURL: "https://chrome.google.com/webstore/detail/falcon-wallet/gkhnjcpkikkkfhhdhhphcbhmkikoicgn",
    description: "Falcon Extension",
    imageUrl: falcon_wallet_extension_png_1.default,
};
exports.KeplrWallet = {
    id: enums_1.WalletID.Keplr,
    name: "Keplr Wallet",
    install: "Install Keplr Wallet",
    installURL: "https://www.keplr.app/download",
    description: "Keplr Chrome Extension",
    imageUrl: keplr_wallet_extension_png_1.default,
};
exports.LeapWallet = {
    id: enums_1.WalletID.Leap,
    name: "Leap Wallet",
    install: "Install Leap Wallet",
    installURL: "https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",
    description: "Leap Extension",
    imageUrl: leap_wallet_extension_png_1.default,
};
exports.TerraStationWallet = {
    id: enums_1.WalletID.TerraStation,
    name: "Terra Station Wallet",
    install: "Install Terra Station Wallet",
    installURL: "https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",
    description: "Terra Station Extension",
    imageUrl: terra_station_wallet_extension_png_1.default,
};
exports.XdefiWallet = {
    id: enums_1.WalletID.Xdefi,
    name: "XDEFI Wallet",
    install: "Install XDEFI Wallet",
    installURL: "https://chrome.google.com/webstore/detail/xdefi-wallet/hmeobnfnfcmdkdcmlblgagmfpfboieaf",
    description: "XDEFI Extension",
    imageUrl: xdefi_wallet_extension_png_1.default,
};
exports.Wallets = [
    exports.CosmostationWallet,
    exports.FalconWallet,
    exports.KeplrWallet,
    exports.LeapWallet,
    exports.TerraStationWallet,
    exports.XdefiWallet,
];
