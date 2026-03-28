import {ConnectionProvider, WalletProvider} from "@solana/wallet-adapter-react"
import {
  WalletModalProvider
} from "@solana/wallet-adapter-react-ui"
import { Route, Routes } from "react-router-dom"
import Topbar from "./components/topbar"
import Portfolio from "./components/portfolio"
import Send from "./components/send"
function App() {

  const endpoint = "https://api.devnet.solana.com"

  return (
    <div>
      <ConnectionProvider endpoint={endpoint}>
        <WalletProvider wallets={[]} autoConnect>
          <WalletModalProvider>
            <Topbar />
            <Routes>
              <Route path="/" element={<Portfolio />} />
              <Route path="/send" element={<Send />} />
            </Routes>
          </WalletModalProvider>
        </WalletProvider>
      </ConnectionProvider>
    </div>
  )
}

export default App
