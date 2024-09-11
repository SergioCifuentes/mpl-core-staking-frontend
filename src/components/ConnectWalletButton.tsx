import React, { FC, useMemo } from "react";
import { useWallet, WalletProvider } from '@solana/wallet-adapter-react';
import { WalletModalProvider, WalletMultiButton } from '@solana/wallet-adapter-react-ui';
import {
    PhantomWalletAdapter,
    SolflareWalletAdapter,
} from '@solana/wallet-adapter-wallets';

export const ConnectWalletButton: FC = () => {
    const wallets = useMemo(() => [
        new PhantomWalletAdapter(),
        new SolflareWalletAdapter(),
    ], []);

    return (
        <WalletProvider wallets={wallets} autoConnect>
            <WalletModalProvider>
                <WalletMultiButton />
            </WalletModalProvider>
        </WalletProvider>
    );
};