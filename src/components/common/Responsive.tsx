import React from 'react';
import styled from 'styled-components';

interface ResponsiveProps {
    children?: unknown;
}

const ResponsiveBlock = styled.div`
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    min-width: 360px;
    max-width: 600px;

    @media (max-width: 360px) {
        width: 100%;
    }
`;

const Responsive: React.FC<ResponsiveProps> = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
