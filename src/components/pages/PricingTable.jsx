import React from 'react'
import Helmet from '../common/HelmetTitle';
import Breadcrumb from '../common/Breadcrumb'

import PricingTableComponent from '../PricingTable/PricingTable'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const PricingTable = () => {
    return (
        <div>
            <Helmet pageTitle='Pricing Table' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Pricing Table" />

            <PricingTableComponent />

        </div>
    )
}

export default PricingTable