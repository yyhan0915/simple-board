import Head from 'next/head';
import React from 'react';
import Responsive from '../components/common/Responsive';

interface MainLayoutProps {
    title?: string;
}

const MainLayout: React.FC<MainLayoutProps> = ({ children, title = 'My App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Responsive>{children}</Responsive>
        </>
    );
};

export default MainLayout;
