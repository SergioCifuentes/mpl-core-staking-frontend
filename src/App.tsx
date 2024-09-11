import React from 'react';
import './App.css';
import TestButton from "./components/TestButton";
import { AppRoutes } from './routes';

function App() {
    return (
        <div className="App">
            <header className="App-header">
                <h1>Welcome to MPL Core Staking</h1>
                <TestButton />
            </header>
            <AppRoutes />
        </div>
    );
}

export default App;