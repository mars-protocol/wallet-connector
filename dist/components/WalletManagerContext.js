"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.useWallet = exports.fetchBalances = exports.useWalletManager = exports.WalletManagerContext = void 0;
const shuttle_1 = require("@delphi-labs/shuttle");
const react_1 = require("react");
const utils_1 = require("src/utils");
exports.WalletManagerContext = (0, react_1.createContext)(null);
const useWalletManager = () => {
    const context = (0, react_1.useContext)(exports.WalletManagerContext);
    if (!context) {
        throw new Error("You forgot to use WalletManagerProvider.");
    }
    return context;
};
exports.useWalletManager = useWalletManager;
const fetchBalances = async (address, chainId) => {
    return await (0, utils_1.getWalletBalances)(address, chainId);
};
exports.fetchBalances = fetchBalances;
exports.useWallet = shuttle_1.useShuttle;
