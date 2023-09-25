!function(e,t){"object"==typeof exports&&"object"==typeof module?module.exports=t():"function"==typeof define&&define.amd?define("@marsprotocol/wallet-connector",[],t):"object"==typeof exports?exports["@marsprotocol/wallet-connector"]=t():e["@marsprotocol/wallet-connector"]=t()}(this,(()=>(()=>{"use strict";var e={838:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(736),a=n(689);t.default=({setConnected:e,setConnectedWallet:t,chainId:n})=>{const{connect:l,extensionProviders:s,mobileProviders:i,wallets:r}=(0,o.useShuttle)();return(0,a.useEffect)((()=>{if(null===r)return;const o=[...s,...i],a=r.find((e=>e.network.chainId===n));if(!a)return;const l=o.find((e=>e.id===a.providerId));l&&l.connect({chainId:a.network.chainId}).then((()=>{e(),t(a)}))}),[l,r,s,i,e,t,n]),null}},650:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(736),a=n(689);t.default=({setConnectedWallet:e,chainId:t,connectedWallet:n})=>{const{wallets:l,recentWallet:s}=(0,o.useShuttle)();return(0,a.useEffect)((()=>{if(null===l||!s)return;if((null==n?void 0:n.account.address)===s.account.address)return;const o=s.network.chainId===t?s:l.find((e=>e.network.chainId===t));e(o)}),[l,s,e,t,n]),null}},200:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(736);t.default=({setDisconnected:e,setConnectedWallet:t,chainId:n})=>{const{disconnectWallet:a,disconnect:l,wallets:s}=(0,o.useShuttle)(),i=null==s?void 0:s.find((e=>e.network.chainId===n));return i?a(i):l(),t(),e(),null}},178:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0});const o=n(736),a=n(689);t.default=({setConnected:e,setConnectedWallet:t,chainId:n})=>{const{connect:l,mobileProviders:s,wallets:i}=(0,o.useShuttle)();return(0,a.useEffect)((()=>{if(null===i)return;const o=i.find((e=>e.network.chainId===n));if(!o)return;if(!o.providerId.includes("mobile"))return;const a=s.find((e=>e.id===o.providerId));a&&a.connect({chainId:o.network.chainId}).then((()=>{e(),t(o)}))}),[l,i,s,e,t,n]),null}},310:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.WalletManagerContext=t.useWalletManager=t.useWallet=t.MsgExecuteContract=t.getClient=t.fetchBalances=void 0;const o=n(799),a=n(736);Object.defineProperty(t,"MsgExecuteContract",{enumerable:!0,get:function(){return a.MsgExecuteContract}});const l=n(689),s=n(928);t.fetchBalances=async(e,t)=>await(0,s.getWalletBalances)(e,t);const i=(0,l.createContext)(null);t.WalletManagerContext=i,t.useWalletManager=()=>{const e=(0,l.useContext)(i);if(!e)throw new Error("You forgot to use WalletManagerProvider.");return e};const r=a.useShuttle;t.useWallet=r,t.getClient=async e=>{const t="/"===e.slice(-1)?e:`${e}/`;return await o.CosmWasmClient.connect(t)}},461:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.WalletManagerProvider=void 0;const a=n(997),l=n(736),s=n(689),i=n(900),r=n(928),c=o(n(838)),d=o(n(650)),u=o(n(200)),p=n(788),m=n(24),h=n(302),f=o(n(178)),g=n(310);t.WalletManagerProvider=({children:e,chainInfoOverrides:t,classNames:n,closeIcon:o,chainIds:C,defaultChainId:I,enabledWallets:v,enablingStringOverride:b,persistent:x=!1,renderLoader:w,selectWalletOverride:y,noWalletsOverride:W,scanQRCodeOverride:S,stationWalletTutorial:D,walletMetaOverride:M,walletConnectProjectId:O})=>{const[j,P]=(0,s.useState)(!1),[_,k]=(0,s.useState)([]),[N,E]=(0,s.useState)(i.WalletConnectionStatus.Unconnected),[L,A]=(0,s.useState)(),[B,T]=(0,s.useState)(),[R,U]=(0,s.useState)(),z=C.map((e=>(0,r.getChainInfo)(e,t))),F=(0,r.getEnabledWallets)(r.wallets,v,M),K=(e=>{const t=(0,s.useRef)();return(0,s.useEffect)((()=>{t.current=e})),t.current})(I);(0,s.useEffect)((()=>{!B&&F&&z&&T((0,r.getWalletProviders)(F,z))}),[F,z,B]),(0,s.useEffect)((()=>{!R&&F&&z&&U((0,r.getMobileProviders)(F,z))}),[F,z,R]),(0,s.useEffect)((()=>{E(L?i.WalletConnectionStatus.Connected:x?i.WalletConnectionStatus.AutoConnect:i.WalletConnectionStatus.Unconnected)}),[I,x,L]),(0,s.useEffect)((()=>{if(N!==i.WalletConnectionStatus.Unconnected&&N!==i.WalletConnectionStatus.AutoConnect||!x)return;const e=localStorage.getItem("shuttle-react");null!==e&&"[]"!==e&&E(i.WalletConnectionStatus.AutoConnect)}),[]),(0,s.useEffect)((()=>{if(!B||K===I&&_.length>0)return;const e=[];F.forEach((t=>{const n=B.find((e=>e.id===t.id));t.supportedChains.includes(I)&&e.push(Object.assign(Object.assign({},t),{installed:(null==n?void 0:n.initialized)||(null==n?void 0:n.initializing)}))})),k(e),x&&E(i.WalletConnectionStatus.AutoConnect)}),[B,F,x,_.length,I,K]);const H=(0,s.useCallback)((()=>{P(!0)}),[]),G=(0,s.useCallback)((()=>E(i.WalletConnectionStatus.Disconnecting)),[]),J=(0,s.useCallback)((e=>E(e)),[]),q=(0,s.useMemo)((()=>({connect:H,disconnect:G,connectedWallet:L,status:N})),[H,G,L,N]),Q=()=>{E(i.WalletConnectionStatus.Retry)};return B?(0,a.jsx)(l.ShuttleProvider,{extensionProviders:B,mobileProviders:null!=R?R:[],persistent:x,walletConnectProjectId:O,children:(0,a.jsxs)(g.WalletManagerContext.Provider,{value:q,children:[N===i.WalletConnectionStatus.AutoConnect&&(0,a.jsx)(c.default,{chainId:I,setConnected:()=>E(i.WalletConnectionStatus.Connected),setConnectedWallet:A}),N===i.WalletConnectionStatus.WalletConnect&&(0,a.jsx)(f.default,{chainId:I,setConnected:()=>E(i.WalletConnectionStatus.Connected),setConnectedWallet:A}),N===i.WalletConnectionStatus.Disconnecting&&(0,a.jsx)(u.default,{chainId:I,setConnectedWallet:()=>A(void 0),setDisconnected:()=>E(i.WalletConnectionStatus.Unconnected)}),N===i.WalletConnectionStatus.Connected&&(0,a.jsx)(d.default,{chainId:I,connectedWallet:L,setConnectedWallet:A}),e,(0,a.jsx)(p.SelectWalletModal,{chainId:I,classNames:n,closeIcon:o,closeModal:()=>{P(!1)},isOpen:j,noWalletsOverride:W,onClose:()=>P(!1),scanQRCodeOverride:S,selectWalletOverride:y,setStatus:J,status:N,wallets:_}),(0,a.jsx)(m.EnablingWalletModal,{classNames:n,closeIcon:o,enablingStringOverride:b,isOpen:N===i.WalletConnectionStatus.Connecting,onClose:()=>{E(i.WalletConnectionStatus.Unconnected),P(!0)},renderLoader:w,reset:Q}),(0,a.jsx)(h.StationWalletErrorModal,{classNames:n,closeIcon:o,isOpen:N===i.WalletConnectionStatus.StationWalletError,onClose:()=>{E(i.WalletConnectionStatus.Unconnected),P(!0)},renderLoader:w,reset:Q,stationWalletTutorial:D})]})}):null}},740:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(788),t),a(n(310),t),a(n(461),t)},950:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.BaseModal=void 0;const a=n(997),l=n(689),s=o(n(931)),i=n(590),r=n(794);t.BaseModal=({isOpen:e,onClose:t,title:n,classNames:o,closeIcon:c,children:d})=>{var u,p;return(0,l.useEffect)((()=>{s.default.setAppElement("body")}),[]),(0,a.jsx)(s.default,{ariaHideApp:!1,className:null!==(u=null==o?void 0:o.modalContent)&&void 0!==u?u:"_",contentElement:(e,t)=>(0,a.jsx)("div",Object.assign({style:r.baseModalStyles.modalContent},e,{children:t})),isOpen:e,onRequestClose:e=>{e.preventDefault(),null==t||t()},overlayClassName:null!==(p=null==o?void 0:o.modalOverlay)&&void 0!==p?p:"_",overlayElement:(e,t)=>(0,a.jsx)("div",Object.assign({style:r.baseModalStyles.modalOverlay},e,{children:t})),style:{overlay:(null==o?void 0:o.modalOverlay)?void 0:r.baseModalStyles.modalOverlay,content:(null==o?void 0:o.modalContent)?void 0:r.baseModalStyles.modalContent},children:(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("div",{className:null==o?void 0:o.modalHeader,style:(null==o?void 0:o.modalHeader)?void 0:r.baseModalStyles.modalHeader,children:n}),t&&(0,a.jsx)("div",{className:null==o?void 0:o.modalCloseButton,onClick:t,style:(null==o?void 0:o.modalCloseButton)?void 0:r.baseModalStyles.modalCloseButton,children:c||(0,a.jsx)(i.CloseIcon,{height:26,width:26})}),d]})})}},590:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.CloseIcon=void 0;const o=n(997);t.CloseIcon=e=>(0,o.jsx)("svg",Object.assign({fill:"none",height:e.width||24,style:{display:"block"},viewBox:"0 0 16 16",width:e.width||24,xmlns:"http://www.w3.org/2000/svg"},e,{children:(0,o.jsx)("path",{clipRule:"evenodd",d:"m9.893 11.674-1.9-1.9-1.902 1.902c-.451.451-1.176.452-1.627.002a1.16 1.16 0 0 1-.01-1.638l1.903-1.902L4.47 6.249a1.16 1.16 0 0 1-.01-1.637 1.164 1.164 0 0 1 1.648-.001l1.889 1.888 1.902-1.902a1.16 1.16 0 0 1 1.638.01c.45.45.45 1.175-.002 1.626L9.632 8.135l1.9 1.9c.45.45.46 1.186-.002 1.648a1.16 1.16 0 0 1-1.637-.01Z",fill:"currentColor",fillOpacity:.95,fillRule:"evenodd"})}))},24:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.EnablingWalletModal=void 0;const a=n(997),l=n(689),s=n(950),i=n(794);t.EnablingWalletModal=e=>{var{isOpen:t,classNames:n,renderLoader:r,enablingStringOverride:c,reset:d}=e,u=o(e,["isOpen","classNames","renderLoader","enablingStringOverride","reset"]);const[p,m]=(0,l.useState)(!1);return(0,l.useEffect)((()=>{if(!t)return void m(!1);const e=setTimeout((()=>m(!0)),8e3);return()=>clearTimeout(e)}),[t,m]),(0,a.jsx)(s.BaseModal,Object.assign({classNames:n,isOpen:t,maxWidth:"540px",title:c||"Enabling Wallet..."},u,{children:(0,a.jsxs)("div",{style:i.modalStyles.body,children:[r&&r(),p&&(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)("p",{style:i.modalStyles.text,children:"If nothing shows up in your wallet try to connect again, by clicking on the button below. Refresh the page if the problem persists."}),(0,a.jsx)("button",{onClick:d,style:i.modalStyles.button,children:"Reset Connection"})]})]})}))}},157:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n},a=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.SelectWalletModal=void 0;const l=n(997),s=n(736),i=n(689),r=n(599),c=a(n(267)),d=n(900),u=n(950),p=n(794);t.SelectWalletModal=e=>{var{wallets:t,chainId:n,closeModal:a,classNames:m,noWalletsOverride:h,selectWalletOverride:f,scanQRCodeOverride:g,setStatus:C,status:I}=e,v=o(e,["wallets","chainId","closeModal","classNames","noWalletsOverride","selectWalletOverride","scanQRCodeOverride","setStatus","status"]);const{connect:b,mobileConnect:x}=(0,s.useShuttle)(),[w,y]=(0,i.useState)(),[W,S]=(0,i.useState)(),[D,M]=(0,i.useState)(),O=I===d.WalletConnectionStatus.Connecting,j=I===d.WalletConnectionStatus.Connected,P=I===d.WalletConnectionStatus.AutoConnect,_=I===d.WalletConnectionStatus.WalletConnect,k=I===d.WalletConnectionStatus.Retry,N=()=>{y(void 0)},E=async(e,t,n)=>{S(e);let o=!0;if("app"!==n){const n=setTimeout((()=>C(d.WalletConnectionStatus.Connecting)),500);try{a(),await b({extensionProviderId:e,chainId:t})}catch(n){n&&(console.error("Connecting with:",{providerId:e,chainId:t}),console.error("Wallet Connector: ",n),o=!1)}clearTimeout(n),C(o?d.WalletConnectionStatus.Connected:e===d.WalletID.Station?d.WalletConnectionStatus.StationWalletError:d.WalletConnectionStatus.Errored)}else try{const n=await x({mobileProviderId:e,chainId:t,callback:()=>{a()}});r.isDesktop?(C(d.WalletConnectionStatus.WalletConnect),M(n.qrCodeUrl)):(C(d.WalletConnectionStatus.Connecting),r.isAndroid?window.location.href=n.androidUrl:r.isIOS?window.location.href=n.iosUrl:window.location.href=n.androidUrl)}catch(n){n&&(console.error("Connecting with:",{providerId:e,chainId:t}),console.error("Wallet Connector: ",n),o=!1)}};(0,i.useEffect)((()=>{j||P||O||k&&W&&E(W,n,"extension")}),[n,j,O,P,k,W]);const L=e=>{const t="app"===e.type,o=t&&r.isDesktop;return(0,l.jsx)("div",{children:(0,l.jsxs)("div",{className:null==m?void 0:m.wallet,onClick:t=>{t.preventDefault(),y(void 0),e.installed||"app"===e.type?E(e.id,n,e.type):(window.open(e.installURL,"_blank"),a())},onMouseEnter:()=>{var t;t=e.id,y(t)},onMouseLeave:N,style:(null==m?void 0:m.wallet)?void 0:w===e.id?Object.assign(Object.assign({},p.selectWalletStyles.wallet),p.selectWalletStyles.walletHover):p.selectWalletStyles.wallet,children:[(0,l.jsx)("img",{alt:`${e.name} logo`,className:null==m?void 0:m.walletImage,src:o?e.mobileImageUrl:e.imageUrl,style:(null==m?void 0:m.walletImage)?void 0:p.selectWalletStyles.walletIconImg}),(0,l.jsxs)("div",{className:null==m?void 0:m.walletInfo,style:(null==m?void 0:m.walletInfo)?void 0:p.selectWalletStyles.walletInfo,children:[(0,l.jsx)("div",{className:null==m?void 0:m.walletName,style:(null==m?void 0:m.walletName)?void 0:p.selectWalletStyles.walletName,children:o?e.walletConnect:t||e.installed?e.name:e.install}),(0,l.jsx)("div",{className:null==m?void 0:m.walletDescription,style:(null==m?void 0:m.walletDescription)?void 0:p.selectWalletStyles.walletDescription,children:t||e.installed?e.description:e.installURL})]})]},e.id)},e.id)},A=(0,i.useMemo)((()=>t.filter((e=>r.isDesktop||"app"===e.type)).sort(((e,t)=>e.installed===t.installed?0:e.installed?-1:1))),[t]),B=(0,i.useMemo)((()=>t.filter((e=>e.installed))),[t]);return A.length?(0,l.jsx)(u.BaseModal,Object.assign({classNames:m,title:_?g||"Scan QR Code to Connect":f||"Select a wallet"},v,{children:_?(0,l.jsx)("div",{className:null==m?void 0:m.walletConnect,style:(null==m?void 0:m.walletConnect)?void 0:p.selectWalletStyles.walletConnect,children:D&&(0,l.jsx)(c.default,{bgColor:"transparent",className:null==m?void 0:m.walletConnectQR,fgColor:"##fff",style:(null==m?void 0:m.walletConnectQR)?void 0:p.selectWalletStyles.walletConnectQR,value:D})}):(0,l.jsx)("div",{className:null==m?void 0:m.walletList,style:(null==m?void 0:m.walletList)?void 0:p.selectWalletStyles.walletList,children:r.isMobile&&B.length?B.map((e=>L(e))):A.map((e=>L(e)))})})):(0,l.jsx)(u.BaseModal,Object.assign({classNames:m,title:f||"Select a wallet"},v,{children:(0,l.jsx)("p",{className:null==m?void 0:m.noneAvailableText,style:(null==m?void 0:m.noneAvailableText)?void 0:p.selectWalletStyles.noneAvailableText,children:h||"There are currently no wallets supported for your device"})}))}},302:function(e,t,n){var o=this&&this.__rest||function(e,t){var n={};for(var o in e)Object.prototype.hasOwnProperty.call(e,o)&&t.indexOf(o)<0&&(n[o]=e[o]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var a=0;for(o=Object.getOwnPropertySymbols(e);a<o.length;a++)t.indexOf(o[a])<0&&Object.prototype.propertyIsEnumerable.call(e,o[a])&&(n[o[a]]=e[o[a]])}return n};Object.defineProperty(t,"__esModule",{value:!0}),t.StationWalletErrorModal=void 0;const a=n(997),l=n(950),s=n(794);t.StationWalletErrorModal=e=>{var{isOpen:t,classNames:n,stationWalletTutorial:i,reset:r}=e,c=o(e,["isOpen","classNames","stationWalletTutorial","reset"]);return(0,a.jsx)(l.BaseModal,Object.assign({classNames:n,isOpen:t,maxWidth:"540px",title:(null==i?void 0:i.headline)?null==i?void 0:i.headline:"Connection Failed"},c,{children:(0,a.jsxs)("div",{style:s.modalStyles.body,children:[(0,a.jsx)("p",{style:s.modalStyles.text,children:(null==i?void 0:i.intro)?null==i?void 0:i.intro:"Connecting to your Station Wallet failed. Potential reasons include:"}),(0,a.jsx)("p",{style:s.modalStyles.textSmall,children:(null==i?void 0:i.wrongNetwork)?null==i?void 0:i.wrongNetwork:"1. You have the wrong network selected. Please make sure to select 'Mainnets' or 'Testnets' by clicking on the gear icon in your Station Wallet interface."}),(0,a.jsx)("p",{style:s.modalStyles.textSmall,children:(null==i?void 0:i.reimportWallet)?null==i?void 0:i.reimportWallet:"2. Your wallet address may use a legacy derivation path. Removing and reimporting it into Station Wallet will add support for BIP44 paths in addition to the 330 cointype without impacting your balances. If you are using a Ledger, remove your Ledger from your Station Wallet and import it again (making sure to click 'yes' on the 'Import Cosmos accounts' page). If you are not using a Ledger, make sure you've backed up your mnemonic phrase. Then, remove your wallet from the extension and re-add it by importing your mnemonic phrase."}),(0,a.jsx)("p",{style:s.modalStyles.textSubInfo,children:(null==i?void 0:i.ready)?null==i?void 0:i.ready:"After trying the suggestions above, please retry the connection."}),(0,a.jsx)("button",{onClick:r,style:s.modalStyles.button,children:(null==i?void 0:i.retry)?null==i?void 0:i.retry:"Retry Connection"})]})}))}},794:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.modalStyles=t.selectWalletStyles=t.baseModalStyles=void 0,t.baseModalStyles={modalOverlay:{backgroundColor:"rgba(0, 0, 0, 0.6)",position:"fixed",top:0,left:0,right:0,bottom:0,width:"100vw",height:"100vh",zIndex:50,display:"flex",alignItems:"center",justifyContent:"center",cursor:"pointer",margin:0},modalContent:{width:"540px",maxWidth:"calc(100% - 40px)",position:"absolute",left:"50%",transform:"translateX(-50%)",padding:"16px",border:"7px solid #421f32",borderRadius:"16px",display:"flex",flexDirection:"column",background:"linear-gradient(99.79deg, rgba(8, 11, 30, 0.79) 8.17%, rgba(52, 20, 33, 0.9) 94.54%)",outline:"none",cursor:"auto",maxHeight:"100vh",overflowY:"auto",justifyContent:"start"},modalHeader:{fontSize:"21px",lineHeight:"32px",fontWeight:400,textTransform:"uppercase",letterSpacing:"3px",color:"#FFF",margin:"0 0 16px",width:"100%",textAlign:"center",padding:"0 30px",zIndex:1,position:"relative"},modalCloseButton:{position:"absolute",top:"16px",right:"16px",cursor:"pointer",height:"24px",width:"24px",zIndex:2}},t.selectWalletStyles={walletList:{display:"flex",flexDirection:"column",gap:"16px",padding:"8px 0"},wallet:{background:"rgba(255, 255, 255, 0)",padding:"8px",boxShadow:"none",display:"flex",alignItems:"center",appearance:"none",border:"none",width:"100%",textDecoration:"none",borderRadius:"8px",cursor:"pointer",transition:"all .5s"},walletHover:{background:"rgba(255, 255, 255, 0.1)"},walletDisabled:{pointerEvents:"none",opacity:"0.5"},walletIconImg:{width:"60px",height:"60px"},walletInfo:{display:"flex",flexDirection:"column",marginLeft:"20px",fontWeight:"400"},walletName:{color:"#FFF",lineHeight:"24px",fontSize:"17px",fontWeight:"600",textTransform:"uppercase",letterSpacing:"3px"},walletDescription:{margin:"4px 0 0",color:"rgba(255, 255, 255, 0.4)",textAlign:"left",fontSize:"15px",lineHeight:"20px"},walletConnect:{display:"flex",flex:"0 0 100%",justifyContent:"center",padding:"16px"},walletConnectQR:{backgroundColor:"#FFF",border:"6px solid #FFF",display:"block",height:"265px",width:"265px"},noneAvailableText:{textAlign:"center"}},t.modalStyles={body:{flex:"0 0 100%",display:"flex",justifyContent:"center",flexWrap:"wrap"},text:{width:"100%",textAlign:"center",margin:"0 0 16px"},textSmall:{width:"100%",textAlign:"left",fontSize:"14px",margin:"0 0 16px"},textSubInfo:{width:"100%",textAlign:"center",opacity:".6",fontSize:"14px",margin:"0 0 16px"},button:{appearance:"none",height:"32px",lineHeight:"18px",fontSize:"15px",color:"#FFF",padding:"6px 20px",borderRadius:"30px",outline:"none",border:"none",background:"#14a693",cursor:"pointer"}}},788:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(950),t),a(n(590),t),a(n(157),t),a(n(794),t)},900:(e,t)=>{var n,o,a;Object.defineProperty(t,"__esModule",{value:!0}),t.ChainInfoID=t.WalletID=t.WalletConnectionStatus=void 0,function(e){e[e.Unconnected=0]="Unconnected",e[e.Connecting=1]="Connecting",e[e.AutoConnect=2]="AutoConnect",e[e.WalletConnect=3]="WalletConnect",e[e.Connected=4]="Connected",e[e.Disconnecting=5]="Disconnecting",e[e.Errored=6]="Errored",e[e.Retry=7]="Retry",e[e.StationWalletError=8]="StationWalletError"}(n||(t.WalletConnectionStatus=n={})),function(e){e.Cosmostation="cosmostation",e.CosmostationMobile="mobile-cosmostation",e.Falcon="falcon",e.Keplr="keplr",e.KeplrMobile="mobile-keplr",e.Leap="leap-cosmos",e.LeapMobile="mobile-leap-cosmos",e.LeapMetaMaskSnap="leap-metamask-cosmos-snap",e.Station="station",e.Vectis="vectis-cosmos",e.Xdefi="xfi-cosmos"}(o||(t.WalletID=o={})),function(e){e.Cosmoshub4="cosmoshub-4",e.Injective1="injective-1",e.Juno1="juno-1",e.Mars1="mars-1",e.MarsAres1="ares-1",e.Neutron="neutron-1",e.NeutronTestnet="pion-1",e.Osmosis1="osmosis-1",e.OsmosisDevnet="devnet",e.OsmosisTestnet="osmo-test-5",e.Stargaze1="stargaze-1"}(a||(t.ChainInfoID=a={}))},607:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),"undefined"!=typeof window&&"undefined"!=typeof browser&&void 0===browser.storage&&(browser.storage={local:{get:void 0,set:void 0}}),a(n(740),t),a(n(900),t),a(n(699),t),a(n(928),t)},699:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0})},287:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getChainInfo=t.SimpleChainInfoList=void 0;const o=n(418),a=n(900);t.SimpleChainInfoList={[a.ChainInfoID.Cosmoshub4]:{rpc:"https://rpc-cosmoshub.keplr.app",rest:"https://lcd-cosmoshub.keplr.app",explorer:"https://www.mintscan.io/cosmos",explorerName:"Mintscan",chainId:a.ChainInfoID.Cosmoshub4,name:"Cosmos Hub",bech32Config:o.Bech32Address.defaultBech32Config("cosmos"),feeCurrencies:[{coinDenom:"ATOM",coinMinimalDenom:"uatom",coinDecimals:6,coinGeckoId:"cosmos"}],features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.Injective1]:{rpc:"https://public.api.injective.network",rest:"https://public.lcd.injective.network",explorer:"https://mintscan.io/injective",explorerName:"Mintscan",chainId:a.ChainInfoID.Injective1,name:"Injective",bip44:{coinType:60},bech32Config:o.Bech32Address.defaultBech32Config("inj"),gasPrice:"0.0005inj",feeCurrencies:[{coinDenom:"INJ",coinMinimalDenom:"inj",coinDecimals:18,coinGeckoId:"injective-protocol",gasPriceStep:{low:5e-4,average:7e-4,high:9e-4}}],features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.Juno1]:{rpc:"https://rpc-juno.itastakers.com",rest:"https://lcd-juno.itastakers.com",explorer:"https://www.mintscan.io/juno",explorerName:"Mintscan",chainId:a.ChainInfoID.Juno1,name:"Juno",bech32Config:o.Bech32Address.defaultBech32Config("juno"),feeCurrencies:[{coinDenom:"JUNO",coinMinimalDenom:"ujuno",coinDecimals:6,coinGeckoId:"juno-network",gasPriceStep:{low:.03,average:.04,high:.05}}],features:["ibc-transfer","ibc-go","wasmd_0.24+","cosmwasm"]},[a.ChainInfoID.Mars1]:{rpc:"https://rpc.marsprotocol.io",rest:"https://rest.marsprotocol.io",explorer:"https://explorer.marsprotocol.io",explorerName:"Mars Explorer",chainId:a.ChainInfoID.Mars1,name:"Mars Hub",bech32Config:o.Bech32Address.defaultBech32Config("mars"),gasPrice:"0umars",defaultCurrency:{coinDenom:"MARS",coinMinimalDenom:"umars",coinDecimals:6,coinGeckoId:"marsprotocol",gasPriceStep:{low:0,average:.00625,high:.01}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.MarsAres1]:{rpc:"https://testnet-rpc.marsprotocol.io",rest:"https://testnet-rest.marsprotocol.io",explorer:"https://testnet-explorer.marsprotocol.io",explorerName:"Mars Explorer",chainId:a.ChainInfoID.MarsAres1,name:"Mars Hub Testnet",bech32Config:o.Bech32Address.defaultBech32Config("mars"),gasPrice:"0umars",defaultCurrency:{coinDenom:"MARS",coinMinimalDenom:"umars",coinDecimals:6,coinGeckoId:"marsprotocol",gasPriceStep:{low:0,average:.00625,high:.01}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.Neutron]:{rpc:"https://rpc-neutron.keplr.app/",rest:"https://lcd-neutron.keplr.app/",explorer:"https://www.mintscan.io/neutron",explorerName:"Mintscan",chainId:a.ChainInfoID.Neutron,name:"Neutron",gasPrice:"0.025untrn",bech32Config:o.Bech32Address.defaultBech32Config("neutron"),defaultCurrency:{coinDenom:"NTRN",coinMinimalDenom:"untrn",coinDecimals:6,coinGeckoId:"neutron",gasPriceStep:{low:0,average:.025,high:.04}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.NeutronTestnet]:{rpc:"https://rpc-palvus.pion-1.ntrn.tech/",rest:"https://rest-palvus.pion-1.ntrn.tech/",explorer:"https://testnet.mintscan.io/neutron-testnet",explorerName:"Mintscan",chainId:a.ChainInfoID.NeutronTestnet,name:"Neutron Testnet",gasPrice:"0.025untrn",bech32Config:o.Bech32Address.defaultBech32Config("neutron"),defaultCurrency:{coinDenom:"NTRN",coinMinimalDenom:"untrn",coinDecimals:6,coinGeckoId:"neutron",gasPriceStep:{low:0,average:.025,high:.04}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.Osmosis1]:{rpc:"https://rpc-osmosis.blockapsis.com",rest:"https://lcd-osmosis.blockapsis.com",explorer:"https://www.mintscan.io/osmosis",explorerName:"Mintscan",chainId:a.ChainInfoID.Osmosis1,name:"Osmosis",gasPrice:"0.025uosmo",bech32Config:o.Bech32Address.defaultBech32Config("osmo"),defaultCurrency:{coinDenom:"OSMO",coinMinimalDenom:"uosmo",coinDecimals:6,coinGeckoId:"osmosis",gasPriceStep:{low:0,average:.025,high:.04}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.OsmosisDevnet]:{rpc:"https://rpc.devnet.osmosis.zone",rest:"\thttps://lcd.devnet.osmosis.zone",explorer:"https://www.mintscan.io/osmosis",explorerName:"Mintscan",chainId:a.ChainInfoID.OsmosisDevnet,name:"Osmosis Devnet",gasPrice:"0.025uosmo",bech32Config:o.Bech32Address.defaultBech32Config("osmo"),defaultCurrency:{coinDenom:"OSMO",coinMinimalDenom:"uosmo",coinDecimals:6,coinGeckoId:"osmosis",gasPriceStep:{low:0,average:.025,high:.04}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.OsmosisTestnet]:{rpc:"https://rpc.osmotest5.osmosis.zone",rest:"https://lcd.osmotest5.osmosis.zone",explorer:"https://testnet.mintscan.io/osmosis-testnet",explorerName:"Mintscan",chainId:a.ChainInfoID.OsmosisTestnet,name:"Osmosis Testnet",gasPrice:"0.025uosmo",bech32Config:o.Bech32Address.defaultBech32Config("osmo"),defaultCurrency:{coinDenom:"OSMO",coinMinimalDenom:"uosmo",coinDecimals:6,coinGeckoId:"osmosis",gasPriceStep:{low:0,average:.025,high:.04}},features:["ibc-transfer","ibc-go"]},[a.ChainInfoID.Stargaze1]:{rpc:"https://rpc.stargaze-apis.com",rest:"https://rest.stargaze-apis.com",explorer:"https://mintscan.io/stargaze",explorerName:"Mintscan",chainId:a.ChainInfoID.Stargaze1,name:"Stargaze",bech32Config:o.Bech32Address.defaultBech32Config("stars"),feeCurrencies:[{coinDenom:"STARS",coinMinimalDenom:"ustars",coinDecimals:6,coinGeckoId:"pool:ustars"}],features:["ibc-transfer"]}},t.getChainInfo=(e,n)=>{const o=t.SimpleChainInfoList[e];return n&&o&&Object.keys(n).map((function(e){o[e]=n[e]})),o}},442:function(e,t,n){var o=this&&this.__importDefault||function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0}),t.getWalletBalances=void 0;const a=o(n(167)),l=n(928);t.getWalletBalances=async(e,t)=>{const n=(0,l.getChainInfo)(t),o="/"===n.rest.slice(-1)?"cosmos/bank/v1beta1/balances/":"/cosmos/bank/v1beta1/balances/",s=`${n.rest}${o}${e}`;return await(0,a.default)({url:s,method:"GET",headers:{Accept:"application/json","Content-Type":"application/json"}}).then((e=>e.data)).catch((e=>console.error(e)))}},823:(e,t)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.ensure=void 0,t.ensure=function(e,t="Can not find value"){if(null==e)throw new TypeError(t);return e}},928:function(e,t,n){var o=this&&this.__createBinding||(Object.create?function(e,t,n,o){void 0===o&&(o=n);var a=Object.getOwnPropertyDescriptor(t,n);a&&!("get"in a?!t.__esModule:a.writable||a.configurable)||(a={enumerable:!0,get:function(){return t[n]}}),Object.defineProperty(e,o,a)}:function(e,t,n,o){void 0===o&&(o=n),e[o]=t[n]}),a=this&&this.__exportStar||function(e,t){for(var n in e)"default"===n||Object.prototype.hasOwnProperty.call(t,n)||o(t,e,n)};Object.defineProperty(t,"__esModule",{value:!0}),a(n(287),t),a(n(442),t),a(n(28),t)},28:(e,t,n)=>{Object.defineProperty(t,"__esModule",{value:!0}),t.getMobileProviders=t.getWalletProviders=t.getEnabledWallets=t.wallets=t.XdefiWallet=t.VectisWallet=t.StationWallet=t.MetaMaskLeap=t.LeapMobileWallet=t.LeapWallet=t.KeplrMobileWallet=t.KeplrWallet=t.CosmostationMobileWallet=t.CosmostationWallet=void 0;const o=n(736),a=n(900),l=n(823);t.CosmostationWallet={id:a.WalletID.Cosmostation,name:"Cosmostation Wallet",install:"Install Cosmostation Wallet",installURL:"https://chrome.google.com/webstore/detail/cosmostation-wallet/fpkhgmpbidmiogeglndfbkegfdlnajnf",description:"Cosmostation Extension",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",provider:o.CosmostationExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Mars1,a.ChainInfoID.MarsAres1,a.ChainInfoID.NeutronTestnet,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.OsmosisDevnet,a.ChainInfoID.OsmosisTestnet,a.ChainInfoID.Stargaze1]},t.CosmostationMobileWallet={id:a.WalletID.CosmostationMobile,name:"Cosmostation Wallet",walletConnect:"Cosmostation WalletConnect",description:"Cosmostation Mobile App",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-extension.png",mobileImageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/cosmostation-wallet-connect.png",provider:o.CosmostationMobileProvider,type:"app",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Mars1,a.ChainInfoID.MarsAres1,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.OsmosisTestnet,a.ChainInfoID.Stargaze1]},t.KeplrWallet={id:a.WalletID.Keplr,name:"Keplr Wallet",install:"Install Keplr Wallet",installURL:"https://www.keplr.app/download",description:"Keplr Extension",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-extension.png",provider:o.KeplrExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Mars1,a.ChainInfoID.MarsAres1,a.ChainInfoID.NeutronTestnet,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.OsmosisDevnet,a.ChainInfoID.OsmosisTestnet,a.ChainInfoID.Stargaze1]},t.KeplrMobileWallet={id:a.WalletID.KeplrMobile,name:"Keplr Wallet",walletConnect:"Keplr WalletConnect",description:"Keplr Mobile App",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-extension.png",mobileImageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/keplr-wallet-connect.png",provider:o.KeplrMobileProvider,type:"app",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.Stargaze1]},t.LeapWallet={id:a.WalletID.Leap,name:"Leap Wallet",install:"Install Leap Wallet",installURL:"https://chrome.google.com/webstore/detail/leap-cosmos-wallet/fcfcfllfndlomdhbehjjcoimbgofdncg",description:"Leap Extension",imageUrl:"https://assets.leapwallet.io/logos/leap-cosmos-logo.png",provider:o.LeapCosmosExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Mars1,a.ChainInfoID.MarsAres1,a.ChainInfoID.NeutronTestnet,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.OsmosisTestnet,a.ChainInfoID.Stargaze1]},t.LeapMobileWallet={id:a.WalletID.LeapMobile,name:"Leap Wallet",walletConnect:"Leap WalletConnect",description:"Leap Mobile App",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/leap-wallet-extension.png",mobileImageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/leap-wallet-connect.png",provider:o.LeapCosmosMobileProvider,type:"app",supportedChains:[a.ChainInfoID.Cosmoshub4,a.ChainInfoID.Injective1,a.ChainInfoID.Juno1,a.ChainInfoID.Mars1,a.ChainInfoID.MarsAres1,a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.OsmosisTestnet,a.ChainInfoID.Stargaze1]},t.MetaMaskLeap={id:a.WalletID.LeapMetaMaskSnap,name:"MetaMask (via Leap Snap)",install:"Install MetaMask",installURL:"https://metamask.io/download/",description:"MetaMask Snap provided by Leap",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/leap-metamask-snap.png",provider:o.LeapMetamaskCosmosSnapExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Neutron,a.ChainInfoID.Osmosis1,a.ChainInfoID.Stargaze1]},t.StationWallet={id:a.WalletID.Station,name:"Station Wallet",install:"Install Station Wallet",installURL:"https://chrome.google.com/webstore/detail/station-wallet/aiifbnbfobpmeekipheeijimdpnlpgpp",description:"Station Wallet Extension",imageUrl:"https://raw.githubusercontent.com/mars-protocol/wallet-connector/main/src/components/ui/images/terra-station-wallet-extension.png",provider:o.StationExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Mars1,a.ChainInfoID.Osmosis1]},t.VectisWallet={id:a.WalletID.Vectis,name:"Vectis Wallet",install:"Install Vectis Wallet",installURL:"https://chrome.google.com/webstore/detail/vectis/cgkaddoglojnmfiblgmlinfaijcdpfjm",description:"Vectis Smart Contract Wallet",imageUrl:"https://cloudflare-ipfs.com/ipfs/QmU7BdRsm936vQvawJNzxfHEuChEf8GEKUhp4ADHjV6tnp",provider:o.VectisCosmosExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.NeutronTestnet,a.ChainInfoID.Neutron]},t.XdefiWallet={id:a.WalletID.Xdefi,name:"XDEFI Wallet",install:"Install XDEFI Wallet",installURL:"https://go.xdefi.io/mars",description:"XDEFI Extension",imageUrl:"https://xdefi-static.s3.eu-west-1.amazonaws.com/xdefi.png",provider:o.XDEFICosmosExtensionProvider,type:"extension",supportedChains:[a.ChainInfoID.Mars1,a.ChainInfoID.Osmosis1]},t.wallets=[t.CosmostationWallet,t.CosmostationMobileWallet,t.KeplrWallet,t.KeplrMobileWallet,t.LeapWallet,t.LeapMobileWallet,t.MetaMaskLeap,t.StationWallet,t.VectisWallet,t.XdefiWallet],t.getEnabledWallets=(e,t,n)=>{const o=t.map((t=>(0,l.ensure)(e.find((e=>e.id===t)))));return n&&Object.entries(n).forEach((([e,t])=>{Object.entries(t).forEach((([t,n])=>{o.forEach(((o,a)=>{(null==o?void 0:o.id)===e&&(enabledWalletsFiltered[a][t]=n)}))}))})),o},t.getWalletProviders=(e,t)=>{if(!t)return;const n=[];return e.forEach((e=>{if("extension"===e.type){const o=new e.provider({networks:t});n.push(o)}})),n},t.getMobileProviders=(e,t)=>{if(!t)return;const n=[];return e.forEach((e=>{if("app"===e.type){const o=new e.provider({networks:t});n.push(o)}})),n}},799:e=>{e.exports=require("@cosmjs/cosmwasm-stargate")},736:e=>{e.exports=require("@delphi-labs/shuttle-react")},418:e=>{e.exports=require("@keplr-wallet/cosmos")},167:e=>{e.exports=require("axios")},689:e=>{e.exports=require("react")},599:e=>{e.exports=require("react-device-detect")},931:e=>{e.exports=require("react-modal")},267:e=>{e.exports=require("react-qr-code")},997:e=>{e.exports=require("react/jsx-runtime")}},t={};return function n(o){var a=t[o];if(void 0!==a)return a.exports;var l=t[o]={exports:{}};return e[o].call(l.exports,l,l.exports,n),l.exports}(607)})()));
//# sourceMappingURL=index.js.map