import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { AssetList } from "./components/AssetList";
import { ConnectWalletButton } from "./components/ConnectWalletButton";

export const AppRoutes = () => {
    return (
        <Router>
            <Routes>
                <Route path="/" element={<ConnectWalletButton />} />
                <Route path="/assets" element={<AssetList />} />
            </Routes>
        </Router>
    );
};