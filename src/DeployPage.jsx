import React from 'react';
import PropTypes from 'prop-types';

function DeployPage({ regions, products, pricing }) {
    return (
        <div className="gap-4 lg:grid lg:grid-cols-12">
            <div className="bg-white lg:col-span-8 lg:mb-0 mb-4 p-6 rounded-lg">
                <div className="mb-6">
                    <h3 className="font-bold font-xl mb-2">Region</h3>
                    <div className="select">
                        <select name="region">
                            {regions.map(region => (
                                <option name={region} key={region}>
                                    {region}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="mb-6">
                    <h3 className="font-bold font-xl mb-2">Product</h3>
                    <div className="select">
                        <select name="product">
                            {products.map(product => (
                                <option name={product.name} key={product.name}>
                                    {product.name} - {product.cpu} CPU Cores,{' '}
                                    {product.ram} GB Ram
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div>
                    <h3 className="font-bold font-xl mb-2">Number of nodes</h3>
                    {/* 
                        Please update the max property here based on the
                        max number of nodes available for the selected product
                        and display the current value alongside the slider
                    */}
                    <div className="flex justify-between">
                        <input
                            className="flex-grow mr-4"
                            type="range"
                            min={0}
                            max={999}
                        />
                        <span>Show slider value here</span>
                    </div>
                </div>
            </div>
            <aside className="bg-white lg:col-span-4 p-6 rounded-lg">
                <h3 className="font-bold font-xl mb-2">Price</h3>
                {/* 
                    Please display the correct price here based on the
                    selected product, selected region and selected number of nodes
                */}
                <div className="font-bold text-2xl">${pricing.default.cr0}</div>
            </aside>
        </div>
    );
}

DeployPage.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.string).isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    pricing: PropTypes.object.isRequired,
};

export default DeployPage;
