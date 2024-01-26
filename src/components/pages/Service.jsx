import React from 'react'
import Helmet from '../common/HelmetTitle';

import Breadcrumb from '../common/Breadcrumb';

import ServiceList from '../service/ServiceList'
import ServiceListTwo from '../service/ServiceListTwo'
import ServiceListThree from '../service/ServiceListThree'
import ServiceListFour from '../service/ServiceListFour'
import ServiceListFive from '../service/ServiceListFive'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;


const Service = () => {
    return (
        <>
            <Helmet pageTitle='Service' />

            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Service" />

            <ServiceListFive
                bgColor="bg-white"
                title="Digital Marketing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceList
                title="Digital Marketing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceListFour
                bgColor="bg-gray-50"
                title="Digital Marketing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceListTwo
                title="Digital Marketing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />

            <ServiceListThree
                bgColor="bg-gray-50"
                title="Digital Marketing"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration."
            />


        </>
    )
}

export default Service