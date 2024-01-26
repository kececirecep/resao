import React from 'react'
import Helmet from '../components/common/HelmetTitle';


import ContactFormThree from '../components/contact/ContactFormThree';
import Breadcrumb from '../components/common/Breadcrumb';
import ContactBoxes from '../components/contact/ContactBoxes';

import MainHeader from '../components/header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const Contact = () => {
    return (
        <>
            <Helmet pageTitle='Contact' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Contact" />

            <ContactBoxes
                animate={true} />

            <ContactFormThree />

        </>
    )
}

export default Contact