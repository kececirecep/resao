import React from 'react'
import Helmet from '../common/HelmetTitle';

import ContactForm from '../contact/ContactForm'
import ContactFormThree from '../contact/ContactFormThree'
import Breadcrumb from '../common/Breadcrumb'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const ContactForms = () => {
    return (
        <>
            <Helmet pageTitle='Contact Forms' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Contact Forms" />

            <ContactFormThree
                animate={true}
                title="Contact"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration."/>

            <ContactForm
                animate={true}
                bgColor="bg-gray-50"
                title="Contact"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration."/>
        </>
    )
}

export default ContactForms