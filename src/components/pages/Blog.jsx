import React from 'react'
import Helmet from '../common/HelmetTitle';

import BlogList from '../blog/BlogList'
import BlogListTwo from '../blog/BlogListTwo'
import BlogListThree from '../blog/BlogListThree'
import Breadcrumb from '../common/Breadcrumb'

import MainHeader from '../header/MainHeader';

import styled from 'styled-components';


const AppContainer = styled.div`
  max-width: 100%;
`;

const Blog = () => {
    return (
        <div className=''>
            <Helmet pageTitle='Blog' />
            <AppContainer>
                <MainHeader
                    subHeader={true} />
            </AppContainer>

            <Breadcrumb title="Blog" />

            <BlogList
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>


            <BlogListThree
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>


            <BlogListTwo
                animate={true}
                title="Our Blogs"
                subTitle="There are many variations of passages of Lorem Ipsum available,
                but the majority have suffered alteration. There are many variations of passages of available"/>
        </div>
    )
}

export default Blog