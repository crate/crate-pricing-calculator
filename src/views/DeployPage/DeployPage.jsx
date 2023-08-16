import React from 'react';
import PropTypes from 'prop-types';

function DeployPage({ onSubmit, pricing, products, regions }) {
    return (
        <form name="deploy-page" onSubmit={onSubmit}>
            <div className="gap-4 lg:grid lg:grid-cols-12">
                <div className="bg-white lg:col-span-8 lg:mb-0 mb-4 p-6 rounded-lg">
                    <div className="mb-6">
                        <h3 className="font-bold font-xl mb-2">Region</h3>
                        <div className="select">
                            <select aria-label="region" name="region">
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
                            <select aria-label="product" name="product">
                                {products.map(product => (
                                    <option value={product.name} key={product.name}>
                                        {product.name.toUpperCase()} - {product.cpu}{' '}
                                        CPU Cores, {product.ram} GB Ram
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
                                aria-label="nodes"
                                className="flex-grow mr-4"
                                type="range"
                                name="nodes"
                                min={0}
                                max={999}
                            />
                            <span>Show slider value here</span>
                        </div>
                    </div>
                </div>
                <div className="bg-white lg:col-span-4 p-6 rounded-lg">
                    <h3 className="font-bold font-xl mb-2" id="price-header">
                        Price
                    </h3>
                    {/* 
                        Please display the correct price here based on the
                        selected product, selected region and selected number of nodes
                    */}
                    <div
                        aria-labelledby="price-header"
                        className="font-bold text-2xl"
                        role="region"
                    >
                        ${pricing.default.cr0}
                    </div>
                    <div className="flex py-4">
                        <button
                            className="bg-sky-500 inline-flex items-center p-2 rounded-lg text-neutral-50"
                            type="submit"
                        >
                            Deploy
                        </button>
                    </div>
                </div>
            </div>
        </form>
    );
}

DeployPage.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    pricing: PropTypes.object.isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    regions: PropTypes.arrayOf(PropTypes.string).isRequired,
};

export default DeployPage;
