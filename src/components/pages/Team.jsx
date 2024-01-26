import React from 'react'
import Helmet from '../common/HelmetTitle';

import TeamOne from '../team/TeamOne'
import TeamTwo from '../team/TeamTwo'
import TeamThere from '../team/TeamThree'
import Breadcrumb from '../common/Breadcrumb'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;


const Team = () => {
    return (
        <>
            <Helmet pageTitle='Team' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Team" />

            <TeamTwo
                title="Our Skilled Team"
                subTitle="Explore the whole collection of open-source web components, and elements built with the utility classes from Tailwind."
                bgColor="bg-white" />

            <TeamOne
                title="Our Skilled Team"
                subTitle="Explore the whole collection of open-source web components, and elements built with the utility classes from Tailwind." bgColor="bg-gray-50" />


            <TeamThere
                title="Our Skilled Team"
                subTitle="Explore the whole collection of open-source web components, and elements built with the utility classes from Tailwind."
                bgColor="bg-white" />
        </>
    )
}

export default Team