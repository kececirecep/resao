import React from 'react';
import Helmet from '../common/HelmetTitle';

import Breadcrumb from '../common/Breadcrumb';
import PortfolioCardThree from '../portfolio/PortfolioCardTwo';
import PortfolioCard from '../portfolio/PortfolioCard';
import PortfolioSlider from '../portfolio/PortfolioSlider';

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const Portfolio = () => {
  return (
    <>
      <Helmet pageTitle='Portfolio' />
      <AppContainer>
        <MainHeader
          subHeader={true} />
      </AppContainer>

      <Breadcrumb title="Portfolio" />

      <PortfolioCardThree
        title="Portfolio"
        subTitle="There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration."
      />

      <PortfolioCard
        bgColor="bg-gray-50"
        title="Portfolio"
        subTitle="There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration."
      />

      <PortfolioSlider
        title="Portfolio"
        subTitle="There are many variations of passages of Lorem Ipsum available,
        but the majority have suffered alteration."
      />
    </>
  );
};

export default Portfolio;
