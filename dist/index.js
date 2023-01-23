(function webpackUniversalModuleDefinition(root, factory) {
	if(typeof exports === 'object' && typeof module === 'object')
		module.exports = factory();
	else if(typeof define === 'function' && define.amd)
		define("@marsprotocol/wallet-connector", [], factory);
	else if(typeof exports === 'object')
		exports["@marsprotocol/wallet-connector"] = factory();
	else
		root["@marsprotocol/wallet-connector"] = factory();
})(this, () => {
return /******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./src/components/WalletManagerContext.tsx":
/*!*************************************************!*\
  !*** ./src/components/WalletManagerContext.tsx ***!
  \*************************************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.useWallet = exports.useWalletManager = exports.WalletManagerContext = exports.fetchBalances = void 0;
const shuttle_1 = __webpack_require__(/*! @delphi-labs/shuttle */ "@delphi-labs/shuttle");
const react_1 = __webpack_require__(/*! react */ "react");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
const fetchBalances = async (address, chainId) => {
    return await (0, utils_1.getWalletBalances)(address, chainId);
};
exports.fetchBalances = fetchBalances;
exports.WalletManagerContext = (0, react_1.createContext)(null);
const useWalletManager = () => {
    const context = (0, react_1.useContext)(exports.WalletManagerContext);
    if (!context) {
        throw new Error("You forgot to use WalletManagerProvider.");
    }
    return context;
};
exports.useWalletManager = useWalletManager;
exports.useWallet = shuttle_1.useShuttle;


/***/ }),

/***/ "./src/components/WalletManagerProvider.tsx":
/*!**************************************************!*\
  !*** ./src/components/WalletManagerProvider.tsx ***!
  \**************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.WalletManagerProvider = void 0;
const shuttle_1 = __webpack_require__(/*! @delphi-labs/shuttle */ "@delphi-labs/shuttle");
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const enums_1 = __webpack_require__(/*! ../enums */ "./src/enums.ts");
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
const ui_1 = __webpack_require__(/*! ./ui */ "./src/components/ui/index.ts");
const WalletManagerContext_1 = __webpack_require__(/*! ./WalletManagerContext */ "./src/components/WalletManagerContext.tsx");
const WalletManagerProvider = ({ children, chainInfoOverrides, classNames, closeIcon, defaultChainId, enabledWallets, persistent = false, selectWalletOverride, walletMetaOverride, }) => {
    const [status, setStatus] = (0, react_1.useState)(enums_1.WalletConnectionStatus.Unconnected);
    const network = (0, utils_1.getChainInfo)(defaultChainId, chainInfoOverrides);
    const mappedNetwork = network;
    mappedNetwork.name = mappedNetwork.chainName;
    const networks = [mappedNetwork];
    const providers = [];
    const enabledWalletsFiltered = [];
    enabledWallets.forEach((walletID) => {
        utils_1.Wallets.map((walletData) => {
            if (walletData.id === walletID) {
                enabledWalletsFiltered.push(walletData);
                return;
            }
        });
    });
    if (walletMetaOverride) {
        Object.entries(walletMetaOverride).forEach(([id, override]) => {
            Object.entries(override).forEach(([key, value]) => {
                enabledWalletsFiltered.forEach((wallet, index) => {
                    if (wallet.id === id) {
                        enabledWalletsFiltered[index][key] = value;
                    }
                });
            });
        });
    }
    enabledWalletsFiltered.forEach((wallet) => {
        providers.push(new wallet.provider({ networks }));
    });
    const closePickerModal = () => {
        setPickerModalOpen(false);
    };
    const beginConnection = (0, react_1.useCallback)(() => {
        setPickerModalOpen(true);
    }, []);
    const terminateConnection = (0, react_1.useCallback)(() => {
        setStatus(enums_1.WalletConnectionStatus.Unconnected);
    }, []);
    const [pickerModalOpen, setPickerModalOpen] = (0, react_1.useState)(false);
    const value = (0, react_1.useMemo)(() => ({
        connect: beginConnection,
        disconnect: terminateConnection,
        status,
    }), [beginConnection, terminateConnection, status]);
    return (react_1.default.createElement(shuttle_1.ShuttleProvider, { persistent: persistent, providers: providers },
        react_1.default.createElement(WalletManagerContext_1.WalletManagerContext.Provider, { value: value },
            children,
            react_1.default.createElement(ui_1.SelectWalletModal, { chainId: defaultChainId, classNames: classNames, closeIcon: closeIcon, closeModal: closePickerModal, isOpen: pickerModalOpen, onClose: () => setPickerModalOpen(false), selectWalletOverride: selectWalletOverride, setStatus: setStatus, wallets: enabledWalletsFiltered }))));
};
exports.WalletManagerProvider = WalletManagerProvider;


/***/ }),

/***/ "./src/components/index.ts":
/*!*********************************!*\
  !*** ./src/components/index.ts ***!
  \*********************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./ui */ "./src/components/ui/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./WalletManagerContext */ "./src/components/WalletManagerContext.tsx"), exports);
__exportStar(__webpack_require__(/*! ./WalletManagerProvider */ "./src/components/WalletManagerProvider.tsx"), exports);


/***/ }),

/***/ "./src/components/ui/BaseModal.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/BaseModal.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.BaseModal = void 0;
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const react_modal_1 = __importDefault(__webpack_require__(/*! react-modal */ "react-modal"));
const CloseIcon_1 = __webpack_require__(/*! ./CloseIcon */ "./src/components/ui/CloseIcon.tsx");
const Styles_1 = __webpack_require__(/*! ./Styles */ "./src/components/ui/Styles.ts");
const BaseModal = ({ isOpen, onClose, title, classNames, closeIcon, children, }) => {
    var _a, _b;
    (0, react_1.useEffect)(() => {
        react_modal_1.default.setAppElement("body");
    }, []);
    return (react_1.default.createElement(react_modal_1.default, { ariaHideApp: false, className: (_a = classNames === null || classNames === void 0 ? void 0 : classNames.modalContent) !== null && _a !== void 0 ? _a : "_", contentElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: Styles_1.baseModalStyles.modalContent }, props), children)), isOpen: isOpen, onRequestClose: (e) => {
            e.preventDefault();
            onClose === null || onClose === void 0 ? void 0 : onClose();
        }, overlayClassName: (_b = classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay) !== null && _b !== void 0 ? _b : "_", overlayElement: (props, children) => (react_1.default.createElement("div", Object.assign({ style: Styles_1.baseModalStyles.modalOverlay }, props), children)), style: {
            overlay: (classNames === null || classNames === void 0 ? void 0 : classNames.modalOverlay)
                ? undefined
                : Styles_1.baseModalStyles.modalOverlay,
            content: (classNames === null || classNames === void 0 ? void 0 : classNames.modalContent)
                ? undefined
                : Styles_1.baseModalStyles.modalContent,
        } },
        react_1.default.createElement(react_1.default.Fragment, null,
            react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalHeader) ? undefined : Styles_1.baseModalStyles.modalHeader }, title),
            onClose && (react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton, onClick: onClose, style: (classNames === null || classNames === void 0 ? void 0 : classNames.modalCloseButton)
                    ? undefined
                    : Styles_1.baseModalStyles.modalCloseButton }, closeIcon !== null && closeIcon !== void 0 ? closeIcon : react_1.default.createElement(CloseIcon_1.CloseIcon, { height: 26, width: 26 }))),
            children)));
};
exports.BaseModal = BaseModal;


/***/ }),

/***/ "./src/components/ui/CloseIcon.tsx":
/*!*****************************************!*\
  !*** ./src/components/ui/CloseIcon.tsx ***!
  \*****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.CloseIcon = void 0;
const react_1 = __importDefault(__webpack_require__(/*! react */ "react"));
const CloseIcon = (props) => (react_1.default.createElement("svg", Object.assign({ fill: "none", height: props.width || 16, viewBox: "0 0 16 16", width: props.width || 16, xmlns: "http://www.w3.org/2000/svg" }, props),
    react_1.default.createElement("path", { clipRule: "evenodd", d: "m9.893 11.674-1.9-1.9-1.902 1.902c-.451.451-1.176.452-1.627.002a1.16 1.16 0 0 1-.01-1.638l1.903-1.902L4.47 6.249a1.16 1.16 0 0 1-.01-1.637 1.164 1.164 0 0 1 1.648-.001l1.889 1.888 1.902-1.902a1.16 1.16 0 0 1 1.638.01c.45.45.45 1.175-.002 1.626L9.632 8.135l1.9 1.9c.45.45.46 1.186-.002 1.648a1.16 1.16 0 0 1-1.637-.01Z", fill: "currentColor", fillOpacity: 0.95, fillRule: "evenodd" })));
exports.CloseIcon = CloseIcon;


/***/ }),

/***/ "./src/components/ui/SelectWalletModal.tsx":
/*!*************************************************!*\
  !*** ./src/components/ui/SelectWalletModal.tsx ***!
  \*************************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __rest = (this && this.__rest) || function (s, e) {
    var t = {};
    for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p) && e.indexOf(p) < 0)
        t[p] = s[p];
    if (s != null && typeof Object.getOwnPropertySymbols === "function")
        for (var i = 0, p = Object.getOwnPropertySymbols(s); i < p.length; i++) {
            if (e.indexOf(p[i]) < 0 && Object.prototype.propertyIsEnumerable.call(s, p[i]))
                t[p[i]] = s[p[i]];
        }
    return t;
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.SelectWalletModal = void 0;
const shuttle_1 = __webpack_require__(/*! @delphi-labs/shuttle */ "@delphi-labs/shuttle");
const react_1 = __importStar(__webpack_require__(/*! react */ "react"));
const enums_1 = __webpack_require__(/*! ../../enums */ "./src/enums.ts");
const BaseModal_1 = __webpack_require__(/*! ./BaseModal */ "./src/components/ui/BaseModal.tsx");
const Styles_1 = __webpack_require__(/*! ./Styles */ "./src/components/ui/Styles.ts");
const SelectWalletModal = (_a) => {
    var { wallets, chainId, closeModal, classNames, selectWalletOverride, setStatus } = _a, props = __rest(_a, ["wallets", "chainId", "closeModal", "classNames", "selectWalletOverride", "setStatus"]);
    const { connect, providers } = (0, shuttle_1.useShuttle)();
    const [isHover, setIsHover] = (0, react_1.useState)("");
    const handleMouseEnter = (walletID) => {
        setIsHover(walletID);
    };
    const handleMouseLeave = () => {
        setIsHover("");
    };
    const handleConnectClick = async (providerId, chainId) => {
        setStatus(enums_1.WalletConnectionStatus.Connecting);
        let connected = true;
        try {
            await connect(providerId, chainId);
        }
        catch (error) {
            if (error) {
                connected = false;
            }
        }
        setStatus(connected
            ? enums_1.WalletConnectionStatus.Connected
            : enums_1.WalletConnectionStatus.Errored);
        closeModal();
    };
    return (react_1.default.createElement(BaseModal_1.BaseModal, Object.assign({ classNames: classNames, title: selectWalletOverride ? selectWalletOverride : "Select a wallet" }, props),
        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletList, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletList) ? undefined : Styles_1.selectWalletStyles.walletList }, wallets.map((wallet, index) => {
            const isInstalled = providers.map((provider) => {
                if (provider.id === wallet.id) {
                    return !(!provider.initialized && !provider.initializing);
                }
            });
            return (react_1.default.createElement("div", { key: index },
                react_1.default.createElement("div", { key: wallet.id, className: classNames === null || classNames === void 0 ? void 0 : classNames.wallet, onClick: (e) => {
                        e.preventDefault();
                        if (!isInstalled) {
                            window.open(wallet.installURL, "_blank");
                            closeModal();
                        }
                        else {
                            handleConnectClick(wallet.id, chainId);
                        }
                    }, onMouseEnter: () => {
                        handleMouseEnter(wallet.id);
                    }, onMouseLeave: handleMouseLeave, style: (classNames === null || classNames === void 0 ? void 0 : classNames.wallet)
                        ? undefined
                        : isHover === wallet.id
                            ? Object.assign(Object.assign({}, Styles_1.selectWalletStyles.wallet), Styles_1.selectWalletStyles.walletHover) : Styles_1.selectWalletStyles.wallet },
                    react_1.default.createElement("img", { alt: `${wallet.name} logo`, className: classNames === null || classNames === void 0 ? void 0 : classNames.walletImage, src: wallet.imageUrl, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletImage)
                            ? undefined
                            : Styles_1.selectWalletStyles.walletIconImg }),
                    react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletInfo)
                            ? undefined
                            : Styles_1.selectWalletStyles.walletInfo },
                        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletName, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletName)
                                ? undefined
                                : Styles_1.selectWalletStyles.walletName }, !isInstalled ? wallet.install : wallet.name),
                        react_1.default.createElement("div", { className: classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription, style: (classNames === null || classNames === void 0 ? void 0 : classNames.walletDescription)
                                ? undefined
                                : Styles_1.selectWalletStyles.walletDescription }, !isInstalled ? wallet.installURL : wallet.description)))));
        }))));
};
exports.SelectWalletModal = SelectWalletModal;


/***/ }),

/***/ "./src/components/ui/Styles.ts":
/*!*************************************!*\
  !*** ./src/components/ui/Styles.ts ***!
  \*************************************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.selectWalletStyles = exports.baseModalStyles = void 0;
exports.baseModalStyles = {
    modalOverlay: {
        backgroundColor: "rgba(0, 0, 0, 0.6)",
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        cursor: "pointer",
        margin: 0,
    },
    modalContent: {
        width: "540px",
        maxWidth: "calc(100% - 40px)",
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "16px",
        border: "7px solid #421f32",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        background: "linear-gradient(99.79deg, rgba(8, 11, 30, 0.79) 8.17%, rgba(52, 20, 33, 0.9) 94.54%)",
        outline: "none",
        cursor: "auto",
    },
    modalHeader: {
        fontSize: "21px",
        lineHeight: "32px",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "3px",
        color: "#FFF",
        margin: "0 0 16px",
        width: "100%",
        textAlign: "center",
    },
    modalCloseButton: {
        position: "absolute",
        top: "16px",
        right: "16px",
        cursor: "pointer",
    },
};
exports.selectWalletStyles = {
    walletList: {
        display: "flex",
        flexDirection: "column",
        gap: "16px",
        padding: "8px 0",
    },
    wallet: {
        background: "rgba(255, 255, 255, 0)",
        padding: "8px",
        boxShadow: "none",
        display: "flex",
        alignItems: "center",
        appearance: "none",
        border: "none",
        width: "100%",
        textDecoration: "none",
        borderRadius: "8px",
        cursor: "pointer",
        transition: "all .5s",
    },
    walletHover: {
        background: "rgba(255, 255, 255, 0.1)",
    },
    walletDisabled: {
        pointerEvents: "none",
        opacity: "0.5",
    },
    walletIconImg: {
        width: "60px",
        height: "60px",
    },
    walletInfo: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "20px",
        fontWeight: "400",
    },
    walletName: {
        color: "#FFF",
        lineHeight: "24px",
        fontSize: "17px",
        fontWeight: "600",
        textTransform: "uppercase",
        letterSpacing: "3px",
    },
    walletDescription: {
        margin: "4px 0 0",
        color: "rgba(255, 255, 255, 0.4)",
        textAlign: "left",
        fontSize: "15px",
        lineHeight: "20px",
    },
};


/***/ }),

/***/ "./src/components/ui/index.ts":
/*!************************************!*\
  !*** ./src/components/ui/index.ts ***!
  \************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./BaseModal */ "./src/components/ui/BaseModal.tsx"), exports);
__exportStar(__webpack_require__(/*! ./CloseIcon */ "./src/components/ui/CloseIcon.tsx"), exports);
__exportStar(__webpack_require__(/*! ./SelectWalletModal */ "./src/components/ui/SelectWalletModal.tsx"), exports);
__exportStar(__webpack_require__(/*! ./Styles */ "./src/components/ui/Styles.ts"), exports);


/***/ }),

/***/ "./src/enums.ts":
/*!**********************!*\
  !*** ./src/enums.ts ***!
  \**********************/
/***/ ((__unused_webpack_module, exports) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.ChainInfoID = exports.WalletID = exports.WalletConnectionStatus = void 0;
var WalletConnectionStatus;
(function (WalletConnectionStatus) {
    WalletConnectionStatus[WalletConnectionStatus["Unconnected"] = 0] = "Unconnected";
    WalletConnectionStatus[WalletConnectionStatus["Connecting"] = 1] = "Connecting";
    WalletConnectionStatus[WalletConnectionStatus["Connected"] = 2] = "Connected";
    WalletConnectionStatus[WalletConnectionStatus["Errored"] = 3] = "Errored";
})(WalletConnectionStatus = exports.WalletConnectionStatus || (exports.WalletConnectionStatus = {}));
var WalletID;
(function (WalletID) {
    WalletID["Cosmostation"] = "cosmostation";
    WalletID["Falcon"] = "falcon";
    WalletID["Keplr"] = "keplr";
    WalletID["Leap"] = "leap-cosmos";
    WalletID["TerraStation"] = "terra-station";
    WalletID["Xdefi"] = "xdefi";
})(WalletID = exports.WalletID || (exports.WalletID = {}));
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


/***/ }),

/***/ "./src/index.ts":
/*!**********************!*\
  !*** ./src/index.ts ***!
  \**********************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


// Fix Safari's nonexistent browser.storage https://github.com/chainapsis/keplr-wallet/blob/4726a96b9663f17b91c5d6b0448bf85ebb4a678a/packages/common/src/kv-store/extension.ts
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
if (typeof window !== "undefined" &&
    typeof browser !== "undefined" &&
    typeof browser.storage === "undefined") {
    browser.storage = { local: { get: undefined, set: undefined } };
}
__exportStar(__webpack_require__(/*! ./components */ "./src/components/index.ts"), exports);
__exportStar(__webpack_require__(/*! ./enums */ "./src/enums.ts"), exports);
__exportStar(__webpack_require__(/*! ./utils */ "./src/utils/index.ts"), exports);


/***/ }),

/***/ "./src/utils/chainInfo.ts":
/*!********************************!*\
  !*** ./src/utils/chainInfo.ts ***!
  \********************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getChainInfo = exports.SimpleChainInfoList = void 0;
const cosmos_1 = __webpack_require__(/*! @keplr-wallet/cosmos */ "@keplr-wallet/cosmos");
const enums_1 = __webpack_require__(/*! ../enums */ "./src/enums.ts");
exports.SimpleChainInfoList = {
    [enums_1.ChainInfoID.Osmosis1]: {
        rpc: "https://rpc-osmosis.blockapsis.com/",
        rest: "https://lcd-osmosis.blockapsis.com/",
        explorer: "https://www.mintscan.io/osmosis/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Osmosis1,
        chainName: "Osmosis",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("osmo"),
        currencies: [
            {
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
                coinImageUrl: "/tokens/osmo.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0,
                    average: 0.025,
                    high: 0.04,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.OsmosisTestnet]: {
        rpc: "https://rpc-test.osmosis.zone/",
        rest: "https://lcd-test.osmosis.zone/",
        explorer: "https://testnet.mintscan.io/osmosis-testnet/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.OsmosisTestnet,
        chainName: "Osmosis Testnet",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("osmo"),
        currencies: [
            {
                coinDenom: "OSMO",
                coinMinimalDenom: "uosmo",
                coinDecimals: 6,
                coinGeckoId: "osmosis",
                coinImageUrl: "/tokens/osmo.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0,
                    average: 0.025,
                    high: 0.04,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Cosmoshub4]: {
        rpc: "https://rpc-cosmoshub.keplr.app",
        rest: "https://lcd-cosmoshub.keplr.app",
        explorer: "https://www.mintscan.io/cosmos/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Cosmoshub4,
        chainName: "Cosmos Hub",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("cosmos"),
        currencies: [
            {
                coinDenom: "ATOM",
                coinMinimalDenom: "uatom",
                coinDecimals: 6,
                coinGeckoId: "cosmos",
                coinImageUrl: "/tokens/atom.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Columbus5]: {
        rpc: "https://rpc-columbus.keplr.app",
        rest: "https://lcd-columbus.keplr.app",
        explorer: "https://finder.terra.money/classic/",
        explorerName: "TerraFinder",
        chainId: enums_1.ChainInfoID.Columbus5,
        chainName: "Terra Classic",
        bip44: {
            coinType: 330,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("terra"),
        currencies: [
            {
                coinDenom: "LUNC",
                coinMinimalDenom: "uluna",
                coinDecimals: 6,
                coinGeckoId: "terra-luna",
                coinImageUrl: "/tokens/lunc.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
            {
                coinDenom: "USTC",
                coinMinimalDenom: "uusd",
                coinDecimals: 6,
                coinGeckoId: "terrausd",
                coinImageUrl: "/tokens/ustc.png",
                isFeeCurrency: true,
                pegMechanism: "algorithmic",
            },
            {
                coinDenom: "KRTC",
                coinMinimalDenom: "ukrw",
                coinDecimals: 6,
                coinGeckoId: "terra-krw",
                coinImageUrl: "/tokens/krtc.png",
                pegMechanism: "algorithmic",
                gasPriceStep: {
                    low: 5.665,
                    average: 5.665,
                    high: 10,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Secret4]: {
        rpc: "https://rpc-secret.keplr.app",
        rest: "https://lcd-secret.keplr.app",
        explorer: "https://www.mintscan.io/secret/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Secret4,
        chainName: "Secret Network",
        bip44: {
            coinType: 529,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("secret"),
        currencies: [
            {
                coinDenom: "SCRT",
                coinMinimalDenom: "uscrt",
                coinDecimals: 6,
                coinGeckoId: "secret",
                coinImageUrl: "/tokens/scrt.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Akashnet2]: {
        rpc: "https://rpc-akash.keplr.app",
        rest: "https://lcd-akash.keplr.app",
        explorer: "https://www.mintscan.io/akash/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Akashnet2,
        chainName: "Akash",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("akash"),
        currencies: [
            {
                coinDenom: "AKT",
                coinMinimalDenom: "uakt",
                coinDecimals: 6,
                coinGeckoId: "akash-network",
                coinImageUrl: "/tokens/akt.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Regen1]: {
        rpc: "https://rpc-regen.keplr.app",
        rest: "https://lcd-regen.keplr.app",
        explorer: "https://www.mintscan.io/regen/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Regen1,
        chainName: "Regen Network",
        bip44: { coinType: 118 },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("regen"),
        currencies: [
            {
                coinDenom: "REGEN",
                coinMinimalDenom: "uregen",
                coinDecimals: 6,
                coinImageUrl: "/tokens/regen.png",
                coinGeckoId: "regen",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Sentinelhub2]: {
        rpc: "https://rpc-sentinel.keplr.app",
        rest: "https://lcd-sentinel.keplr.app",
        explorer: "https://www.mintscan.io/sentinel/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Sentinelhub2,
        chainName: "Sentinel",
        bip44: { coinType: 118 },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("sent"),
        currencies: [
            {
                coinDenom: "DVPN",
                coinMinimalDenom: "udvpn",
                coinDecimals: 6,
                coinGeckoId: "sentinel",
                coinImageUrl: "/tokens/dvpn.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Core1]: {
        rpc: "https://rpc-persistence.keplr.app",
        rest: "https://lcd-persistence.keplr.app",
        explorer: "https://www.mintscan.io/persistence/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Core1,
        chainName: "Persistence",
        bip44: {
            coinType: 750,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("persistence"),
        currencies: [
            {
                coinDenom: "XPRT",
                coinMinimalDenom: "uxprt",
                coinDecimals: 6,
                coinGeckoId: "persistence",
                coinImageUrl: "/tokens/xprt.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
            {
                coinDenom: "PSTAKE",
                coinMinimalDenom: "ibc/A6E3AF63B3C906416A9AF7A556C59EA4BD50E617EFFE6299B99700CCB780E444",
                coinDecimals: 18,
                coinGeckoId: "pstake-finance",
                coinImageUrl: "/tokens/pstake.png",
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Irishub1]: {
        rpc: "https://rpc-iris.keplr.app",
        rest: "https://lcd-iris.keplr.app",
        explorer: "https://www.mintscan.io/iris/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Irishub1,
        chainName: "IRISnet",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("iaa"),
        currencies: [
            {
                coinDenom: "IRIS",
                coinMinimalDenom: "uiris",
                coinDecimals: 6,
                coinGeckoId: "iris-network",
                coinImageUrl: "/tokens/iris.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.CryptoOrgChainMainnet1]: {
        rpc: "https://rpc-crypto-org.keplr.app/",
        rest: "https://lcd-crypto-org.keplr.app/",
        explorer: "https://www.mintscan.io/crypto-org/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.CryptoOrgChainMainnet1,
        chainName: "Crypto.org",
        bip44: {
            coinType: 394,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("cro"),
        currencies: [
            {
                coinDenom: "CRO",
                coinMinimalDenom: "basecro",
                coinDecimals: 8,
                coinGeckoId: "crypto-com-chain",
                coinImageUrl: "/tokens/cro.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.IovMainnetIbc]: {
        rpc: "https://rpc-iov.keplr.app",
        rest: "https://lcd-iov.keplr.app",
        explorer: "https://www.mintscan.io/starname/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.IovMainnetIbc,
        chainName: "Starname",
        bip44: {
            coinType: 234,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("star"),
        currencies: [
            {
                coinDenom: "IOV",
                coinMinimalDenom: "uiov",
                coinDecimals: 6,
                coinGeckoId: "starname",
                coinImageUrl: "/tokens/iov.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Emoney3]: {
        rpc: "https://rpc-emoney.keplr.app",
        rest: "https://lcd-emoney.keplr.app",
        explorer: "https://www.mintscan.io/emoney/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Emoney3,
        chainName: "e-Money",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("emoney"),
        currencies: [
            {
                coinDenom: "NGM",
                coinMinimalDenom: "ungm",
                coinDecimals: 6,
                coinGeckoId: "e-money",
                coinImageUrl: "/tokens/ngm.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
            {
                coinDenom: "EEUR",
                coinMinimalDenom: "eeur",
                coinDecimals: 6,
                coinGeckoId: "e-money-eur",
                coinImageUrl: "/tokens/eeur.png",
                gasPriceStep: {
                    low: 1,
                    average: 1,
                    high: 1,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Juno1]: {
        rpc: "https://rpc-juno.itastakers.com",
        rest: "https://lcd-juno.itastakers.com",
        explorer: "https://www.mintscan.io/juno/",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Juno1,
        chainName: "Juno",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("juno"),
        currencies: [
            {
                coinDenom: "JUNO",
                coinMinimalDenom: "ujuno",
                coinDecimals: 6,
                coinGeckoId: "juno-network",
                coinImageUrl: "/tokens/juno.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.03,
                    average: 0.04,
                    high: 0.05,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go", "wasmd_0.24+", "cosmwasm"],
    },
    [enums_1.ChainInfoID.Uni3]: {
        rpc: "https://rpc.uni.juno.deuslabs.fi",
        rest: "https://lcd.uni.juno.deuslabs.fi",
        explorer: "https://testnet.mintscan.io/juno-testnet",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Uni3,
        chainName: "Juno Testnet",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("juno"),
        currencies: [
            {
                coinDenom: "junox",
                coinMinimalDenom: "ujunox",
                coinDecimals: 6,
                coinImageUrl: "/tokens/juno.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.03,
                    average: 0.04,
                    high: 0.05,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Mars1]: {
        rpc: "https://rpc.marsprotocol.io/",
        rest: "https://rest.marsprotocol.io/",
        explorer: "http://explorer.marsprotocol.io/",
        explorerName: "Mars Explorer",
        chainId: enums_1.ChainInfoID.Mars1,
        chainName: "Mars Hub",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("mars"),
        currencies: [
            {
                coinDenom: "MARS",
                coinMinimalDenom: "umars",
                coinDecimals: 6,
                coinGeckoId: "mars",
                coinImageUrl: "/tokens/mars.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0,
                    average: 0.00625,
                    high: 0.01,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.MarsAres1]: {
        rpc: "https://testnet-rpc.marsprotocol.io/",
        rest: "https://testnet-rest.marsprotocol.io/",
        explorer: "http://testnet-explorer.marsprotocol.io/",
        explorerName: "Mars Explorer",
        chainId: enums_1.ChainInfoID.MarsAres1,
        chainName: "Mars Hub Testnet",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("mars"),
        currencies: [
            {
                coinDenom: "MARS",
                coinMinimalDenom: "umars",
                coinDecimals: 6,
                coinGeckoId: "mars",
                coinImageUrl: "/tokens/mars.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0,
                    average: 0.00625,
                    high: 0.01,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Microtick1]: {
        rpc: "https://rpc-microtick.keplr.app",
        rest: "https://lcd-microtick.keplr.app",
        chainId: enums_1.ChainInfoID.Microtick1,
        chainName: "Microtick",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("micro"),
        currencies: [
            {
                coinDenom: "TICK",
                coinMinimalDenom: "utick",
                coinDecimals: 6,
                coinGeckoId: "pool:utick",
                coinImageUrl: "/tokens/tick.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.LikecoinMainnet2]: {
        rpc: "https://mainnet-node.like.co/rpc",
        rest: "https://mainnet-node.like.co",
        explorer: "https://mintscan.io/likecoin",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.LikecoinMainnet2,
        chainName: "LikeCoin",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("like"),
        currencies: [
            {
                coinDenom: "LIKE",
                coinMinimalDenom: "nanolike",
                coinDecimals: 9,
                coinGeckoId: "likecoin",
                coinImageUrl: "/tokens/like.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Impacthub3]: {
        rpc: "https://rpc-impacthub.keplr.app",
        rest: "https://lcd-impacthub.keplr.app",
        chainId: enums_1.ChainInfoID.Impacthub3,
        chainName: "IXO",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("ixo"),
        currencies: [
            {
                coinDenom: "IXO",
                coinMinimalDenom: "uixo",
                coinDecimals: 6,
                coinGeckoId: "pool:uixo",
                coinImageUrl: "/tokens/ixo.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Bitcanna1]: {
        rpc: "https://rpc.bitcanna.io",
        rest: "https://lcd.bitcanna.io",
        explorer: "https://mintscan.io/bitcanna",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Bitcanna1,
        chainName: "BitCanna",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("bcna"),
        currencies: [
            {
                coinDenom: "BCNA",
                coinMinimalDenom: "ubcna",
                coinDecimals: 6,
                coinGeckoId: "bitcanna",
                coinImageUrl: "/tokens/bcna.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Bitsong2b]: {
        rpc: "https://rpc.explorebitsong.com",
        rest: "https://lcd.explorebitsong.com",
        explorer: "https://mintscan.io/bitsong",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Bitsong2b,
        chainName: "BitSong",
        bip44: {
            coinType: 639,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("bitsong"),
        currencies: [
            {
                coinDenom: "BTSG",
                coinMinimalDenom: "ubtsg",
                coinDecimals: 6,
                coinGeckoId: "pool:ubtsg",
                coinImageUrl: "/tokens/btsg.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Kichain2]: {
        rpc: "https://rpc-mainnet.blockchain.ki",
        rest: "https://api-mainnet.blockchain.ki",
        explorer: "https://mintscan.io/ki-chain",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Kichain2,
        chainName: "Ki",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("ki"),
        currencies: [
            {
                coinDenom: "XKI",
                coinMinimalDenom: "uxki",
                coinDecimals: 6,
                coinGeckoId: "pool:uxki",
                coinImageUrl: "/tokens/xki.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Panacea3]: {
        rpc: "https://rpc.gopanacea.org",
        rest: "https://api.gopanacea.org",
        explorer: "https://mintscan.io/medibloc",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Panacea3,
        chainName: "MediBloc",
        bip44: {
            coinType: 371,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("panacea"),
        currencies: [
            {
                coinDenom: "MED",
                coinMinimalDenom: "umed",
                coinDecimals: 6,
                coinGeckoId: "medibloc",
                coinImageUrl: "/tokens/med.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 5,
                    average: 7,
                    high: 9,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Bostrom]: {
        rpc: "https://rpc.bostrom.cybernode.ai",
        rest: "https://lcd.bostrom.cybernode.ai",
        chainId: enums_1.ChainInfoID.Bostrom,
        chainName: "Bostrom",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("bostrom"),
        currencies: [
            {
                coinDenom: "BOOT",
                coinMinimalDenom: "boot",
                coinDecimals: 0,
                coinGeckoId: "bostrom",
                coinImageUrl: "/tokens/boot.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Comdex1]: {
        rpc: "https://rpc.comdex.one",
        rest: "https://rest.comdex.one",
        explorer: "https://mintscan.io/comdex",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Comdex1,
        chainName: "Comdex",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("comdex"),
        currencies: [
            {
                coinDenom: "CMDX",
                coinMinimalDenom: "ucmdx",
                coinDecimals: 6,
                coinGeckoId: "comdex",
                coinImageUrl: "/tokens/cmdx.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.CheqdMainnet1]: {
        rpc: "https://rpc.cheqd.net",
        rest: "https://api.cheqd.net",
        chainId: enums_1.ChainInfoID.CheqdMainnet1,
        chainName: "cheqd",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("cheqd"),
        currencies: [
            {
                coinDenom: "CHEQ",
                coinMinimalDenom: "ncheq",
                coinDecimals: 9,
                coinGeckoId: "cheqd-network",
                coinImageUrl: "/tokens/cheq.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 25,
                    average: 50,
                    high: 100,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Stargaze1]: {
        rpc: "https://rpc.stargaze-apis.com",
        rest: "https://rest.stargaze-apis.com",
        explorer: "https://mintscan.io/stargaze",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Stargaze1,
        chainName: "Stargaze",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("stars"),
        currencies: [
            {
                coinDenom: "STARS",
                coinMinimalDenom: "ustars",
                coinDecimals: 6,
                coinGeckoId: "pool:ustars",
                coinImageUrl: "/tokens/stars.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Chihuahua1]: {
        rpc: "https://rpc.chihuahua.wtf",
        rest: "https://api.chihuahua.wtf",
        explorer: "https://mintscan.io/chihuahua",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Chihuahua1,
        chainName: "Chihuahua",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("chihuahua"),
        currencies: [
            {
                coinDenom: "HUAHUA",
                coinMinimalDenom: "uhuahua",
                coinDecimals: 6,
                coinGeckoId: "pool:uhuahua",
                coinImageUrl: "/tokens/huahua.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.03,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.LumNetwork1]: {
        rpc: "https://node0.mainnet.lum.network/rpc",
        rest: "https://node0.mainnet.lum.network/rest",
        explorer: "https://mintscan.io/lum",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.LumNetwork1,
        chainName: "Lum Network",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("lum"),
        currencies: [
            {
                coinDenom: "LUM",
                coinMinimalDenom: "ulum",
                coinDecimals: 6,
                coinGeckoId: "pool:ulum",
                coinImageUrl: "/tokens/lum.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Vidulum1]: {
        rpc: "https://mainnet-rpc.vidulum.app",
        rest: "https://mainnet-lcd.vidulum.app",
        chainId: enums_1.ChainInfoID.Vidulum1,
        chainName: "Vidulum",
        bip44: {
            coinType: 370,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("vdl"),
        currencies: [
            {
                coinDenom: "VDL",
                coinMinimalDenom: "uvdl",
                coinDecimals: 6,
                coinGeckoId: "vidulum",
                coinImageUrl: "/tokens/vdl.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.DesmosMainnet]: {
        rpc: "https://rpc.mainnet.desmos.network",
        rest: "https://api.mainnet.desmos.network",
        explorer: "https://mintscan.io/desmos",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.DesmosMainnet,
        chainName: "Desmos",
        bip44: {
            coinType: 852,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("desmos"),
        currencies: [
            {
                coinDenom: "DSM",
                coinMinimalDenom: "udsm",
                coinDecimals: 6,
                coinGeckoId: "pool:udsm",
                coinImageUrl: "/tokens/dsm.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Dig1]: {
        rpc: "https://rpc-1-dig.notional.ventures",
        rest: "https://api-1-dig.notional.ventures",
        chainId: enums_1.ChainInfoID.Dig1,
        chainName: "Dig",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("dig"),
        currencies: [
            {
                coinDenom: "DIG",
                coinMinimalDenom: "udig",
                coinDecimals: 6,
                coinGeckoId: "pool:udig",
                coinImageUrl: "/tokens/dig.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.03,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Sommelier3]: {
        rpc: "https://rpc-sommelier.keplr.app",
        rest: "https://lcd-sommelier.keplr.app",
        explorer: "https://mintscan.io/sommelier",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Sommelier3,
        chainName: "Sommelier",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("somm"),
        currencies: [
            {
                coinDenom: "SOMM",
                coinMinimalDenom: "usomm",
                coinDecimals: 6,
                coinGeckoId: "pool:usomm",
                coinImageUrl: "/tokens/somm.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Sifchain1]: {
        rpc: "https://rpc.sifchain.finance",
        rest: "https://api-int.sifchain.finance",
        explorer: "https://mintscan.io/sifchain",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Sifchain1,
        chainName: "Sifchain",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("sif"),
        currencies: [
            {
                coinDenom: "ROWAN",
                coinMinimalDenom: "rowan",
                coinDecimals: 18,
                coinGeckoId: "sifchain",
                coinImageUrl: "/tokens/rowan.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.LaoziMainnet]: {
        rpc: "https://rpc.laozi3.bandchain.org",
        rest: "https://laozi1.bandchain.org/api",
        explorer: "https://mintscan.io/band",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.LaoziMainnet,
        chainName: "BandChain",
        bip44: {
            coinType: 494,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("band"),
        currencies: [
            {
                coinDenom: "BAND",
                coinMinimalDenom: "uband",
                coinDecimals: 6,
                coinGeckoId: "band-protocol",
                coinImageUrl: "/tokens/band.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Darchub]: {
        rpc: "https://node1.konstellation.tech:26657",
        rest: "https://node1.konstellation.tech:1318",
        explorer: "https://mintscan.io/konstellation",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Darchub,
        chainName: "Konstellation",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("darc"),
        currencies: [
            {
                coinDenom: "DARC",
                coinMinimalDenom: "udarc",
                coinDecimals: 6,
                coinGeckoId: "pool:udarc",
                coinImageUrl: "/tokens/darc.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Umee1]: {
        rpc: "https://rpc.aphrodite.main.network.umee.cc",
        rest: "https://api.aphrodite.main.network.umee.cc",
        explorer: "https://mintscan.io/umee",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Umee1,
        chainName: "Umee",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("umee"),
        currencies: [
            {
                coinDenom: "UMEE",
                coinMinimalDenom: "uumee",
                coinDecimals: 6,
                coinGeckoId: "pool:uumee",
                coinImageUrl: "/tokens/umee.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.GravityBridge3]: {
        rpc: "https://gravitychain.io:26657",
        rest: "https://gravitychain.io:1317",
        explorer: "https://mintscan.io/gravity-bridge",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.GravityBridge3,
        chainName: "Gravity Bridge",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("gravity"),
        currencies: [
            {
                coinDenom: "GRAV",
                coinMinimalDenom: "ugraviton",
                coinDecimals: 6,
                coinGeckoId: "pool:ugraviton",
                coinImageUrl: "/tokens/grav.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
            {
                coinDenom: "PSTAKE",
                coinMinimalDenom: "gravity0xfB5c6815cA3AC72Ce9F5006869AE67f18bF77006",
                coinDecimals: 18,
                coinGeckoId: "pstake-finance",
                coinImageUrl: "/tokens/pstake.png",
            },
            {
                coinDenom: "WBTC.grv",
                coinMinimalDenom: "gravity0x2260FAC5E5542a773Aa44fBCfeDf7C193bc2C599",
                coinDecimals: 8,
                coinGeckoId: "wrapped-bitcoin",
                coinImageUrl: "/tokens/gwbtc.png",
            },
            {
                coinDenom: "WETH.grv",
                coinMinimalDenom: "gravity0xC02aaA39b223FE8D0A0e5C4F27eAD9083C756Cc2",
                coinDecimals: 18,
                coinGeckoId: "ethereum",
                coinImageUrl: "/tokens/gweth.png",
            },
            {
                coinDenom: "USDC.grv",
                coinMinimalDenom: "gravity0xA0b86991c6218b36c1d19D4a2e9Eb0cE3606eB48",
                coinDecimals: 6,
                coinGeckoId: "usd-coin",
                coinImageUrl: "/tokens/gusdc.png",
                pegMechanism: "collateralized",
            },
            {
                coinDenom: "DAI.grv",
                coinMinimalDenom: "gravity0x6B175474E89094C44Da98b954EedeAC495271d0F",
                coinDecimals: 18,
                coinGeckoId: "dai",
                coinImageUrl: "/tokens/gdai.png",
                pegMechanism: "collateralized",
            },
            {
                coinDenom: "USDT.grv",
                coinMinimalDenom: "gravity0xdAC17F958D2ee523a2206206994597C13D831ec7",
                coinDecimals: 6,
                coinGeckoId: "tether",
                coinImageUrl: "/tokens/gusdt.png",
                pegMechanism: "collateralized",
                gasPriceStep: {
                    low: 0,
                    average: 0,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Mainnet3]: {
        rpc: "https://poseidon.mainnet.decentr.xyz",
        rest: "https://rest.mainnet.decentr.xyz",
        chainId: enums_1.ChainInfoID.Mainnet3,
        chainName: "Decentr",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("decentr"),
        currencies: [
            {
                coinDenom: "DEC",
                coinMinimalDenom: "udec",
                coinDecimals: 6,
                coinGeckoId: "decentr",
                coinImageUrl: "/tokens/dec.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Shentu22]: {
        rpc: "https://shenturpc.certikpowered.info",
        rest: "https://azuredragon.noopsbycertik.com",
        chainId: enums_1.ChainInfoID.Shentu22,
        chainName: "Certik",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("certik"),
        currencies: [
            {
                coinDenom: "CTK",
                coinMinimalDenom: "uctk",
                coinDecimals: 6,
                coinGeckoId: "certik",
                coinImageUrl: "/tokens/ctk.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Carbon1]: {
        rpc: "https://tm-api.carbon.network",
        rest: "https://api.carbon.network",
        chainId: enums_1.ChainInfoID.Carbon1,
        chainName: "Carbon",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("swth"),
        currencies: [
            {
                coinDenom: "SWTH",
                coinMinimalDenom: "swth",
                coinDecimals: 8,
                coinGeckoId: "switcheo",
                coinImageUrl: "/tokens/swth.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 769.23077,
                    average: 769.23077,
                    high: 769.23077,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Injective1]: {
        rpc: "https://public.api.injective.network",
        rest: "https://public.lcd.injective.network",
        explorer: "https://mintscan.io/injective",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Injective1,
        chainName: "Injective",
        bip44: {
            coinType: 60,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("inj"),
        currencies: [
            {
                coinDenom: "INJ",
                coinMinimalDenom: "inj",
                coinDecimals: 18,
                coinGeckoId: "injective-protocol",
                coinImageUrl: "/tokens/inj.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.0005,
                    average: 0.0007,
                    high: 0.0009,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.CerberusChain1]: {
        rpc: "https://rpc.cerberus.zone:26657",
        rest: "https://api.cerberus.zone:1317",
        explorer: "https://mintscan.io/cerberus",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.CerberusChain1,
        chainName: "Cerberus",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("cerberus"),
        currencies: [
            {
                coinDenom: "CRBRUS",
                coinMinimalDenom: "ucrbrus",
                coinDecimals: 6,
                coinGeckoId: "cerberus-2",
                coinImageUrl: "/tokens/crbrus.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Fetchhub4]: {
        rpc: "https://rpc-fetchhub.fetch.ai:443",
        rest: "https://rest-fetchhub.fetch.ai",
        explorer: "https://mintscan.io/fetchai",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Fetchhub4,
        chainName: "Fetch.ai",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("fetch"),
        currencies: [
            {
                coinDenom: "FET",
                coinMinimalDenom: "afet",
                coinDecimals: 18,
                coinGeckoId: "fetch-ai",
                coinImageUrl: "/tokens/fet.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.025,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Mantle1]: {
        rpc: "https://rpc.assetmantle.one/",
        rest: "https://rest.assetmantle.one/",
        explorer: "https://mintscan.io/asset-mantle",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Mantle1,
        chainName: "AssetMantle",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("mantle"),
        currencies: [
            {
                coinDenom: "MNTL",
                coinMinimalDenom: "umntl",
                coinDecimals: 6,
                coinGeckoId: "pool:umntl",
                coinImageUrl: "/tokens/mntl.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.PioMainnet1]: {
        rpc: "https://rpc.provenance.io/",
        rest: "https://api.provenance.io",
        explorer: "https://mintscan.io/provenance",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.PioMainnet1,
        chainName: "Provenance",
        bip44: {
            coinType: 505,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("pb"),
        currencies: [
            {
                coinDenom: "HASH",
                coinMinimalDenom: "nhash",
                coinGeckoId: "provenance-blockchain",
                coinDecimals: 9,
                coinImageUrl: "/tokens/hash.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 1905,
                    average: 2100,
                    high: 2500,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Galaxy1]: {
        rpc: "https://rpc.galaxychain.zone",
        rest: "https://rest.galaxychain.zone",
        chainId: enums_1.ChainInfoID.Galaxy1,
        chainName: "Galaxy",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("galaxy"),
        currencies: [
            {
                coinDenom: "GLX",
                coinMinimalDenom: "uglx",
                coinDecimals: 6,
                coinGeckoId: "pool:uglx",
                coinImageUrl: "/tokens/glx.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.025,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Meme1]: {
        rpc: "https://rpc-meme-1.meme.sx:443",
        rest: "https://api-meme-1.meme.sx:443",
        chainId: enums_1.ChainInfoID.Meme1,
        chainName: "Meme",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("meme"),
        currencies: [
            {
                coinDenom: "MEME",
                coinMinimalDenom: "umeme",
                coinDecimals: 6,
                coinGeckoId: "pool:umeme",
                coinImageUrl: "/tokens/meme.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.025,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Evmos_9001_2]: {
        rpc: "https://rpc-evmos.keplr.app/",
        rest: "https://lcd-evmos.keplr.app/",
        explorer: "https://mintscan.io/evmos",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Evmos_9001_2,
        chainName: "Evmos",
        bip44: {
            coinType: 60,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("evmos"),
        currencies: [
            {
                coinDenom: "EVMOS",
                coinMinimalDenom: "aevmos",
                coinDecimals: 18,
                coinGeckoId: "evmos",
                coinImageUrl: "/tokens/evmos.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 10000000000,
                    average: 25000000000,
                    high: 40000000000,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Phoenix1]: {
        rpc: "https://rpc.terrav2.ccvalidators.com/",
        rest: "https://phoenix-lcd.terra.dev/",
        explorer: "https://finder.terra.money/mainnet",
        explorerName: "TerraFinder",
        chainId: enums_1.ChainInfoID.Phoenix1,
        chainName: "Terra 2.0",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("terra"),
        currencies: [
            {
                coinDenom: "LUNA",
                coinMinimalDenom: "uluna",
                coinDecimals: 6,
                coinGeckoId: "terra-luna-2",
                coinImageUrl: "/tokens/luna.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.15,
                    average: 0.2,
                    high: 0.25,
                },
            },
        ],
        features: ["ibc-transfer"],
    },
    [enums_1.ChainInfoID.Titan1]: {
        rpc: "https://rpcapi.rizon.world/",
        rest: "https://restapi.rizon.world/",
        explorer: "https://mintscan.io/rizon",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Titan1,
        chainName: "Rizon",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("rizon"),
        currencies: [
            {
                coinDenom: "ATOLO",
                coinMinimalDenom: "uatolo",
                coinDecimals: 6,
                coinGeckoId: "rizon",
                coinImageUrl: "/tokens/atolo.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 0.025,
                    average: 0.025,
                    high: 0.035,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Kava_2222_10]: {
        rpc: "https://rpc-kava.keplr.app",
        rest: "https://lcd-kava.keplr.app",
        explorer: "https://mintscan.io/kava",
        explorerName: "Mintscan",
        chainId: enums_1.ChainInfoID.Kava_2222_10,
        chainName: "Kava",
        bip44: {
            coinType: 459,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("kava"),
        currencies: [
            {
                coinDenom: "KAVA",
                coinMinimalDenom: "ukava",
                coinDecimals: 6,
                coinGeckoId: "kava",
                coinImageUrl: "/tokens/kava.png",
                isStakeCurrency: true,
                isFeeCurrency: true,
            },
            {
                coinDenom: "HARD",
                coinMinimalDenom: "hard",
                coinDecimals: 6,
                coinGeckoId: "kava-lend",
                coinImageUrl: "/tokens/hard.svg",
            },
            {
                coinDenom: "SWP",
                coinMinimalDenom: "swp",
                coinDecimals: 6,
                coinGeckoId: "kava-swap",
                coinImageUrl: "/tokens/swp.svg",
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
    [enums_1.ChainInfoID.Genesis_29_2]: {
        rpc: "https://26657.genesisl1.org",
        rest: "https://api.genesisl1.org",
        chainId: enums_1.ChainInfoID.Genesis_29_2,
        chainName: "GenesisL1",
        bip44: {
            coinType: 118,
        },
        bech32Config: cosmos_1.Bech32Address.defaultBech32Config("genesis"),
        currencies: [
            {
                coinDenom: "L1",
                coinMinimalDenom: "el1",
                coinDecimals: 18,
                //coinGeckoId: "pool:el1",
                coinImageUrl: "/tokens/l1.svg",
                isStakeCurrency: true,
                isFeeCurrency: true,
                gasPriceStep: {
                    low: 999999999,
                    average: 1000000000,
                    high: 1000000001,
                },
            },
        ],
        features: ["ibc-transfer", "ibc-go"],
    },
};
const getChainInfo = (chainId, chainInfoOverrides) => {
    const chainInfo = exports.SimpleChainInfoList[chainId];
    if (typeof chainInfoOverrides !== "undefined" &&
        chainInfoOverrides[chainId] &&
        chainInfo) {
        Object.keys(chainInfoOverrides[chainId]).map(function (key) {
            chainInfo[key] = chainInfoOverrides[chainId][key];
        });
    }
    return chainInfo;
};
exports.getChainInfo = getChainInfo;


/***/ }),

/***/ "./src/utils/getWalletBalances.ts":
/*!****************************************!*\
  !*** ./src/utils/getWalletBalances.ts ***!
  \****************************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.getWalletBalances = void 0;
const axios_1 = __importDefault(__webpack_require__(/*! axios */ "axios"));
const utils_1 = __webpack_require__(/*! ../utils */ "./src/utils/index.ts");
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


/***/ }),

/***/ "./src/utils/index.ts":
/*!****************************!*\
  !*** ./src/utils/index.ts ***!
  \****************************/
/***/ (function(__unused_webpack_module, exports, __webpack_require__) {


var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __exportStar = (this && this.__exportStar) || function(m, exports) {
    for (var p in m) if (p !== "default" && !Object.prototype.hasOwnProperty.call(exports, p)) __createBinding(exports, m, p);
};
Object.defineProperty(exports, "__esModule", ({ value: true }));
__exportStar(__webpack_require__(/*! ./chainInfo */ "./src/utils/chainInfo.ts"), exports);
__exportStar(__webpack_require__(/*! ./getWalletBalances */ "./src/utils/getWalletBalances.ts"), exports);
__exportStar(__webpack_require__(/*! ./wallets */ "./src/utils/wallets.ts"), exports);


/***/ }),

/***/ "./src/utils/wallets.ts":
/*!******************************!*\
  !*** ./src/utils/wallets.ts ***!
  \******************************/
/***/ ((__unused_webpack_module, exports, __webpack_require__) => {


Object.defineProperty(exports, "__esModule", ({ value: true }));
exports.Wallets = exports.XdefiWallet = exports.TerraStationWallet = exports.LeapWallet = exports.KeplrWallet = exports.FalconWallet = exports.CosmostationWallet = void 0;
const shuttle_1 = __webpack_require__(/*! @delphi-labs/shuttle */ "@delphi-labs/shuttle");
const enums_1 = __webpack_require__(/*! ../enums */ "./src/enums.ts");
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


/***/ }),

/***/ "@delphi-labs/shuttle":
/*!***************************************!*\
  !*** external "@delphi-labs/shuttle" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@delphi-labs/shuttle");

/***/ }),

/***/ "@keplr-wallet/cosmos":
/*!***************************************!*\
  !*** external "@keplr-wallet/cosmos" ***!
  \***************************************/
/***/ ((module) => {

module.exports = require("@keplr-wallet/cosmos");

/***/ }),

/***/ "axios":
/*!************************!*\
  !*** external "axios" ***!
  \************************/
/***/ ((module) => {

module.exports = require("axios");

/***/ }),

/***/ "react":
/*!************************!*\
  !*** external "react" ***!
  \************************/
/***/ ((module) => {

module.exports = require("react");

/***/ }),

/***/ "react-modal":
/*!******************************!*\
  !*** external "react-modal" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-modal");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			// no module.id needed
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module is referenced by other modules so it can't be inlined
/******/ 	var __webpack_exports__ = __webpack_require__("./src/index.ts");
/******/ 	
/******/ 	return __webpack_exports__;
/******/ })()
;
});
//# sourceMappingURL=index.js.map