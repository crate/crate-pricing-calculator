/* eslint-disable no-console */
import React from 'react';
import DeployPage from './DeployPage';
import { PRICING, PRODUCTS, REGIONS } from '../../data';

function DeployPageContainer() {
    // You do not need to modify this component
    //
    // The output of the DeployPage form is being
    // logged to the console here for ease of
    // checking the solution
    return (
        <DeployPage
            onSubmit={console.table}
            pricing={PRICING}
            products={PRODUCTS}
            regions={REGIONS}
        />
    );
}

export default DeployPageContainer;
