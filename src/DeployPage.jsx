import React from 'react';
import PropTypes from 'prop-types';

function DeployPage({ regions, products, pricing }) {
    return (
        <div style={{ width: 400 }}>
            <h2>Cluster Configuration</h2>
            <h3>Region</h3>
            <select name="region" style={{ width: '100%' }}>
                {regions.map(r => {
                    return (
                        <option name={r} key={r}>
                            {r}
                        </option>
                    );
                })}
            </select>
            <h3>Product</h3>
            <select name="product" style={{ width: '100%' }}>
                {products.map(p => {
                    return (
                        <option name={p.name} key={p.name}>
                            {p.name} - {p.cpu} CPU Cores, {p.ram} GB Ram
                        </option>
                    );
                })}
            </select>
            <h3>Number of nodes</h3>
            {
                // Please implement logic based on product.maxScale
            }
            <input type="range" min={0} max={999} />
            <span>Show current value of slider here</span>
            <h3>Price</h3>
            {
                // Please implement logic based on selected product and number of nodes
            }
            <span>${pricing.default.cr0} (Example)</span>
        </div>
    );
}

DeployPage.propTypes = {
    regions: PropTypes.arrayOf(PropTypes.string).isRequired,
    products: PropTypes.arrayOf(PropTypes.object).isRequired,
    pricing: PropTypes.object.isRequired,
};

export default DeployPage;
