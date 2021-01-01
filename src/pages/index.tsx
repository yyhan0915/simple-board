import { NextPage } from 'next';
import { NextRouter, useRouter } from 'next/dist/client/router';
import React from 'react';
import ApplicantBoard from '../components/applicant/ApplicantBoard';
import Footer from '../components/common/Footer';
import Header from '../components/common/Header';
import MainTemplate from '../layout/MainLayout';

const IndexPage: NextPage = () => {
    const router: NextRouter = useRouter();
    const search = Array.isArray(router.query.search) ? router.query.search[0] : router.query.search;

    return (
        <MainTemplate>
            <Header />
            <ApplicantBoard searchTerm={search} />
            <Footer />
        </MainTemplate>
    );
};

IndexPage.getInitialProps = async () => ({
    namespacesRequired: ['common'],
});

export default IndexPage;
