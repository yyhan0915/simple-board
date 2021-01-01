import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const HamburgerButtonBlock = styled(IconButton)`
    position: relative;

    img {
        width: 1.5rem;
        margin-right: 0 !important;
    }
`;

interface IProps {
    sample?: string;
}

const HamburgerButton: React.FC<IProps> = () => {
    return (
        <HamburgerButtonBlock>
            <img src="/asset/image/btn-hamburger.svg" alt="btn_hamburger" />
        </HamburgerButtonBlock>
    );
};

export default HamburgerButton;
