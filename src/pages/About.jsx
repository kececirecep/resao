import React from 'react'

import Counter from '../components/counters/CounterThree'
import Team from '../components/team/TeamThree'
import Brands from '../components/brand/BrandThree'
import Breadcrumb from '../components/common/Breadcrumb';
import AboutFive from '../components/about/AboutFive';
import AboutSix from '../components/about/AboutSix';

import Helmet from '../components/common/HelmetTitle';

import styled from 'styled-components';
import MainHeader from '../components/header/MainHeader';

const AppContainer = styled.div`
  max-width: 100%;
`;

const About = () => {
    return (
        <div>
            <Helmet pageTitle='About' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="About" />

            <AboutFive
                animate={true} />

            <Counter
                animate={true}
            />

            <AboutSix
                animate={true} />

            <Team
                animate={true}
            />

            <Brands
                animate={true}
            />
        </div>
    )
}

export default About