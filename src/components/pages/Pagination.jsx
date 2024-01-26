import React from 'react'
import Helmet from '../common/HelmetTitle';
import Breadcrumb from '../common/Breadcrumb'

import BlogListTwo from '../blog/BlogListTwo'


import PaginationOne from '../pagination/PaginationOne'
import PaginationTwo from '../pagination/PaginationTwo'
import PaginationThree from '../pagination/PaginationThree'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';
const AppContainer = styled.div`
  max-width: 100%;
`;

const Pagination = () => {
    return (
        <div>
            <Helmet pageTitle='Pagination' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Pagination" />

            <BlogListTwo
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>

            <PaginationOne />

            <BlogListTwo
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>
            <PaginationTwo />

            <BlogListTwo
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>
            <PaginationThree />
        </div>
    )
}

export default Pagination