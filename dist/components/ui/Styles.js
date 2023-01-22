"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
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
        position: "absolute",
        left: "50%",
        transform: "translateX(-50%)",
        padding: "16px",
        border: "7px solid #421f32",
        borderRadius: "16px",
        display: "flex",
        flexDirection: "column",
        background: "white",
        outline: "none",
        cursor: "auto",
        maxWidth: "calc(100% - 40px)",
    },
    modalHeader: {
        fontSize: "21px",
        lineHeight: "32px",
        fontWeight: 400,
        textTransform: "uppercase",
        letterSpacing: "3px",
        color: "#FFF",
        margin: "0 0 16px",
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
        background: "transparent",
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
