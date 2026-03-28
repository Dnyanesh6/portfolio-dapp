import  { useEffect } from 'react'
import { useWallet,useConnection } from "@solana/wallet-adapter-react"
import {useState} from "react"

function Portfolio() {
    const {publicKey} = useWallet();
    const {connection} = useConnection();
    const [balance, setBalance] = useState<null | number>(null)

    useEffect((()=>{
        if(!publicKey){
            return} 
        connection.getBalance(publicKey).then((balance)=>{
            setBalance(balance)
        })
    }),[publicKey, connection])


    return (
    <div>
        Address - {publicKey?.toBase58().slice(0,4)}...{publicKey?.toBase58().slice(-4)}
        <br />
        SOL Balance - {balance !== null ? balance/1000_000_000 : 'Connect wallet to see balance'}
    </div>
    )
}

export default Portfolio