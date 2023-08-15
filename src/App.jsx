import React from 'react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from './data';
import Header from './components/Header';
import Footer from './components/Footer';

function App() {
    return (
        <div className="flex flex-col h-screen">
            <Header />
            <main className="bg-neutral-100 flex-grow px-6 py-4">
                <h1 className="font-bold font-lg mb-6">Cluster Configuration</h1>
                <DeployPage
                    regions={REGIONS}
                    products={PRODUCTS}
                    pricing={PRICING}
                />
            </main>
            <Footer />
        </div>
    );
}

export default App;
