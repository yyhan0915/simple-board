import { NextPage } from 'next';
import React from 'react';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainTemplate from '../layout/MainLayout';

const IndexPage: NextPage = () => {
    return (
        <MainTemplate>
            <Header />
            <Footer />
        </MainTemplate>
    );
};

export default IndexPage;
