import React from 'react'
import Helmet from '../common/HelmetTitle';

import CounterFour from '../counters/CounterFour'
import CounterOne from '../counters/CounterOne'
import CounterThree from '../counters/CounterThree'
import CounterTwo from '../counters/CounterTwo'
import Breadcrumb from '../common/Breadcrumb'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;


const Counter = () => {
    return (
        <>
            <Helmet pageTitle='Counter' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Counter" />
            <div>
                <CounterFour title="Brands" />

                <CounterOne />

                <CounterThree />

                <CounterTwo />
            </div>
        </>
    )
}

export default Counter