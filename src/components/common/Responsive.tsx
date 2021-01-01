import React from 'react';
import styled from 'styled-components';
import { device } from '../../styles/palette';

interface ResponsiveProps {
    children?: unknown;
}

const ResponsiveBlock = styled.div`
    margin: 0 auto;
    position: relative;
    min-height: 100vh;
    width: 100%;

    @media ${device.mobile} {
    }

    @media ${device.laptop} {
    }
`;

const Responsive: React.FC<ResponsiveProps> = ({ children, ...rest }) => {
    return <ResponsiveBlock {...rest}>{children}</ResponsiveBlock>;
};

export default Responsive;
