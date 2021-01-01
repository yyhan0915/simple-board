import Head from 'next/head';
import React from 'react';
import Responsive from '../components/common/Responsive';

interface MainTemplateProps {
    title?: string;
}

const MainTemplate: React.FC<MainTemplateProps> = ({ children, title = 'My App' }) => {
    return (
        <>
            <Head>
                <title>{title}</title>
            </Head>
            <Responsive>{children}</Responsive>
        </>
    );
};

export default MainTemplate;
