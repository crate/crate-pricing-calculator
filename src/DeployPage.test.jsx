import React from 'react';
import { render } from '@testing-library/react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from './products';

const setup = () => {
    return render(
        <DeployPage regions={REGIONS} pricing={PRICING} products={PRODUCTS} />,
    );
};

describe('The DeployPage component', () => {
    it('renders the component', () => {
        const { getByText } = setup();

        expect(getByText('Cluster Configuration')).toBeInTheDocument();
    });
});
