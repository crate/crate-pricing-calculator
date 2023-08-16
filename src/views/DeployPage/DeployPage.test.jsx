import React from 'react';
import { render } from '@testing-library/react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from '../../data';

const onSubmitSpy = jest.fn();

const setup = () => {
    return render(
        <DeployPage
            onSubmit={onSubmitSpy}
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
