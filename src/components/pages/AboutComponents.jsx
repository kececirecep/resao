import React from 'react'
import Breadcrumb from '../common/Breadcrumb'
import Helmet from '../common/HelmetTitle';



import AboutOne from '../about/AboutOne'
import AboutTwo from '../about/AboutTwo'
import AboutThree from '../about/AboutThree'
import AboutFour from '../about/AboutFour'
import AboutFive from '../about/AboutFive'
import AboutSix from '../about/AboutSix'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const AboutComponents = () => {
    return (
        <div>
            <Helmet pageTitle='About Components' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="About Components" />

            <AboutOne
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <AboutTwo
                animate={true}
                bgColor="bg-gray-50"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <AboutThree
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <AboutFive
                animate={true}
                bgColor="bg-gray-50"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <AboutSix
                animate={true}
                bgColor="bg-white"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

            <AboutFour
                animate={true}
                bgColor="bg-gray-50"
                title="About"
                subTitle="There are many variations of passages of Lorem Ipsum available, but the majority have suffered alteration." />

        </div>
    )
}

export default AboutComponents