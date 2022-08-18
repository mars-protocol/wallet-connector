import { __rest } from "tslib";
import React from "react";
import styled from "styled-components";
import { WalletType } from "../../types";
import { BaseModal } from "./BaseModal";
export const SelectWalletModal = (_a) => {
    var { wallets, selectWallet, closeModal, classNames, isKeplrExtentionNotInstalled } = _a, props = __rest(_a, ["wallets", "selectWallet", "closeModal", "classNames", "isKeplrExtentionNotInstalled"]);
    return (React.createElement(BaseModal, Object.assign({ classNames: classNames, title: "Select a wallet" }, props),
        React.createElement(WalletList, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletList }, wallets.map((wallet, index) => (React.createElement("div", { key: index }, wallet.type === WalletType.Keplr &&
            isKeplrExtentionNotInstalled &&
            wallet.install &&
            wallet.installURL ? (React.createElement(WalletRow, { key: wallet.type, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                e.preventDefault();
                window.open(wallet.installURL, "_blank");
                closeModal();
            } },
            React.createElement(WalletIconImg, { alt: `${wallet.name} logo`, className: classNames === null || classNames === void 0 ? void 0 : classNames.walletImage, src: wallet.imageUrl }),
            React.createElement(WalletInfo, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo },
                React.createElement(WalletName, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletName }, wallet.install),
                React.createElement(WalletDescription, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription }, wallet.installURL)))) : (React.createElement(WalletRow, { key: wallet.type, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                e.preventDefault();
                selectWallet(wallet);
            } },
            React.createElement(WalletIconImg, { alt: `${wallet.name} logo`, className: classNames === null || classNames === void 0 ? void 0 : classNames.walletImage, src: wallet.imageUrl }),
            React.createElement(WalletInfo, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo },
                React.createElement(WalletName, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletName }, wallet.name),
                React.createElement(WalletDescription, { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription }, wallet.description))))))))));
};
const WalletList = styled.div `
  display: flex;
  flex-direction: column;
  gap: 1rem;
`;
const WalletRow = styled.div `
  border-radius: 1rem;
  padding: 1.25rem;
  display: flex;
  align-items: center;
  background-color: rgb(229 231 235);
  box-shadow: inset 0 0 0 1px rgb(156 163 175);

  &:hover {
    cursor: pointer;
  }
`;
const WalletIconImg = styled.img `
  width: 4rem;
  height: 4rem;
`;
const WalletInfo = styled.div `
  display: flex;
  flex-direction: column;
  margin-left: 1.25rem;
`;
const WalletName = styled.div `
  color: black;
  font-size: 1.125rem;
  font-weight: 600;
  line-height: 1.75rem;
`;
const WalletDescription = styled.div `
  margin-top: 0.25rem;
  color: rgb(75 85 99);
`;
//# sourceMappingURL=SelectWalletModal.js.map