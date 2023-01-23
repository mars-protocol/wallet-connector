"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getWalletBalances = void 0;
const axios_1 = __importDefault(require("axios"));
const utils_1 = require("../utils");
const getWalletBalances = async (address, chainId) => {
    const chainInfo = (0, utils_1.getChainInfo)(chainId);
    const URL = `${chainInfo.rest}cosmos/bank/v1beta1/balances/${address}`;
    return await (0, axios_1.default)({
        url: URL,
        method: "GET",
        headers: {
            Accept: "application/json",
            "Content-Type": "application/json",
        },
    })
        .then((response) => {
        return response.data;
    })
        .catch((err) => console.log(err));
};
exports.getWalletBalances = getWalletBalances;
//# sourceMappingURL=getWalletBalances.js.map