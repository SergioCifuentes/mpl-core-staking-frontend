import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

// Function to check if the wallet is connected
export const connectWallet = () => {
    const { publicKey } = useWallet();

    if (publicKey) {
        return publicKey.toBase58(); // Return wallet public key
    } else {
        throw new Error("Wallet not connected");
    }
};