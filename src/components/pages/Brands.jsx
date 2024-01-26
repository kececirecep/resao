import React from 'react'
import Helmet from '../common/HelmetTitle';

import BrandOne from '../brand/BrandOne'
import BrandTwo from '../brand/BrandTwo'
import BrandThree from '../brand/BrandThree'
import Breadcrumb from '../common/Breadcrumb'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const Brands = () => {
    return (
        <div>
            <Helmet pageTitle='Brands' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Brands" />

            <BrandTwo animate={true} />

            <BrandThree animate={true} bgColor="bg-gray-50" />

            <BrandOne animate={true} />
        </div>
    )
}

export default Brands