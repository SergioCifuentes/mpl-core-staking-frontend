import { PublicKey } from '@solana/web3.js';
import { useWallet } from '@solana/wallet-adapter-react';

export const connectWallet = () => {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    const { publicKey } = useWallet();

    if (publicKey) {
        return publicKey.toBase58();
    } else {
        throw new Error("Wallet not connected");
    }
};