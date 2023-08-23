import React from 'react';
import { render } from '@testing-library/react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from '../../data';

const setup = () => {
    return render(
        <DeployPage
            onSubmit={jest.fn()}
            pricing={PRICING}
            products={PRODUCTS}
            regions={REGIONS}
        />,
    );
};

describe('The DeployPage component', () => {
    it('displays a deploy form', () => {
        const { getByRole } = setup();

        expect(getByRole('form')).toBeInTheDocument();
    });
});
