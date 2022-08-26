export const baseModalStyles = {
    modalOverlay: {
        position: "fixed",
        top: 0,
        left: 0,
        right: 0,
        bottom: 0,
        width: "100vw",
        height: "100vh",
        zIndex: 50,
        backgroundColor: "rgba(0, 0, 0, 0.3)",
        display: "flex",
        alignItems: "center",
        justifyContent: "cetner",
        cursor: "pointer",
    },
    modalHeader: {
        color: "rgb(31, 41, 55)",
        fontSize: "1.25rem",
        fontWeight: "bold",
        lineHeight: "1.75rem",
        marginBottom: "1rem",
    },
    modalSubheader: {
        color: "rgb(31, 41, 55)",
        fontSize: "1rem",
        fontWeight: "bold",
        lineHeight: "1.25rem",
    },
    modalCloseButton: {
        position: "absolute",
        top: "1.25rem",
        right: "1.25rem",
        cursor: "pointer",
    },
};
export const selectWalletStyles = {
    walletList: {
        display: "flex",
        flexDirection: "column",
        gap: "1rem",
    },
    walletRow: {
        borderRadius: "1rem",
        padding: "1.25rem",
        display: "flex",
        alignItems: "center",
        backgroundColor: "rgb(229 231 235)",
        boxShadow: "inset 0 0 0 1px rgb(156 163 175)",
        cursor: "pointer",
    },
    walletIconImg: {
        width: "4rem",
        height: "4rem",
    },
    walletInfo: {
        display: "flex",
        flexDirection: "column",
        marginLeft: "1.25rem",
    },
    walletName: {
        color: "black",
        fontSize: "1.125rem",
        fontWeight: "600",
        lineHeight: "1.75rem",
    },
    walletDescription: {
        marginTop: "0.25rem",
        color: "rgb(75 85 99)",
    },
};
//# sourceMappingURL=Styles.js.map