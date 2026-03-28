import {
    WalletMultiButton,
    WalletDisconnectButton
} from "@solana/wallet-adapter-react-ui"
import { useWallet } from "@solana/wallet-adapter-react"
import { useNavigate } from 'react-router-dom'
import "@solana/wallet-adapter-react-ui/styles.css"

function Topbar() {
  const { publicKey } = useWallet()
  const navigate = useNavigate()
  const handleSendSol = () => {
    navigate('/send')
  }

  return (
    <div style={{display:"flex",gap:16, justifyContent:"flex-end", padding:24}}>
        {!publicKey && <WalletMultiButton />}
        {publicKey && <WalletDisconnectButton />}

        <button style={{
            backgroundColor:"blue",
            border:"none",
            borderRadius:14
        }} onClick={handleSendSol}>
            Send Sol
        </button>
    </div>
  )
}

export default Topbar