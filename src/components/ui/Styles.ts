export const baseModalStyles: { [key: string]: React.CSSProperties } = {
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
    background:
      "linear-gradient(99.79deg, rgba(8, 11, 30, 0.79) 8.17%, rgba(52, 20, 33, 0.9) 94.54%)",
    outline: "none",
    cursor: "auto",
    maxHeight: "100vh",
    overflowY: "auto",
    justifyContent: "center",
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
}

export const selectWalletStyles: { [key: string]: React.CSSProperties } = {
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

  noneAvailableText: {
    textAlign: "center",
  },
}

export const enablingWalletStyles: { [key: string]: React.CSSProperties } = {
  body: {
    flex: "0 0 100%",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
  },

  text: {
    width: "100%",
    textAlign: "center",
    margin: "0 0 16px",
  },

  button: {
    appearance: "none",
    height: "32px",
    lineHeight: "18px",
    fontSize: "15px",
    color: "#FFF",
    padding: "6px 20px",
    borderRadius: "30px",
    outline: "none",
    border: "none",
    background: "#14a693",
    cursor: "pointer",
  },
}
