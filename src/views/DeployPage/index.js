import React from 'react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from '../../data';

function DeployPageContainer() {
    const handleDeployFormSubmit = event => {
        // This function handles logging the output
        // of the form to allow for easy checking
        // of the solution.
        //
        // You do not need to modify this function
        event.preventDefault();
        // eslint-disable-next-line no-console
        console.table(
            [...event.target.elements]
                .filter(({ value }) => !!value)
                .map(({ name, value }) => ({ [name]: value }))
                .reduce(
                    (accumulator, currentValue) => ({
                        ...accumulator,
                        ...currentValue,
                    }),
                    {},
                ),
        );
    };

    return (
        <DeployPage
            onSubmit={handleDeployFormSubmit}
            pricing={PRICING}
            products={PRODUCTS}
            regions={REGIONS}
        />
    );
}

export default DeployPageContainer;
