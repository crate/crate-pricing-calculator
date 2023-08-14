import React from 'react';
import './App.css';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from './products';

function App() {
    return (
        <div className="App">
            <DeployPage regions={REGIONS} products={PRODUCTS} pricing={PRICING} />
        </div>
    );
}

export default App;
