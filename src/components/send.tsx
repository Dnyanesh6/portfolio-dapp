import { Link } from 'react-router-dom'
import { Transaction,PublicKey, SystemProgram, sendAndConfirmTransaction } from '@solana/web3.js'
import { useWallet } from '@solana/wallet-adapter-react'
import { useConnection } from '@solana/wallet-adapter-react'

function Send() {
    const {publicKey} = useWallet();
    const {connection} = useConnection();
	return (
		<div style={{display:"flex", flexDirection:"column", gap:16,maxWidth: 400, padding: 24 }}>
			<h2>Send SOL</h2>
			<input 
            id='recipient'
            style={{
                color:"#FFFFFF",
                border:"none",
                borderRadius:4,
                padding:8
            }}
            type="text" placeholder="Recipient Address" />
            <input 
            id='amount'
            style={{
                color:"#FFFFFF",
                border:"none",
                borderRadius:4,
                padding:8
            }}
            onClick={
                async () => {
                    const transaction = new Transaction().add(
                        SystemProgram.transfer({
                            fromPubkey: publicKey!,
                            toPubkey: new PublicKey(document.getElementById("recipient")!.value),
                            lamports: document.getElementById("amount")!.value * 1000_000_000
                        })
                    );

                    await sendTransaction(connection, transaction);
                }
            }
            type="text" placeholder="Amount" />

            <button style={{
                color:"#FFFFFF",
                border:"none",
                borderRadius:4,
                padding:8,
                backgroundColor:"#4CAF50"
            }}>Send</button>
			<Link 
            style={{
                textDecoration:"none"
            }}
            
            to="/">Back </Link>
		</div>
	)
}

export default Send
