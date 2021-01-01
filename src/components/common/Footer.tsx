import React from 'react';
import styled from 'styled-components';
import palette, { device } from '../../styles/palette';

const FooterBlock = styled.div`
    width: 100%;
    height: 4.375rem;
    position: absolute;
    bottom: 0;
    background-color: ${palette.grey[1]};
    display: flex;
    justify-content: center;
    align-items: center;

    .title {
        color: ${palette.grey[7]};
        font-size: 14px;
        font-weight: 400;
    }

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
    }
`;

interface IProps {
    sample?: string;
}

const Footer: React.FC<IProps> = () => {
    return (
        <FooterBlock>
            <div className="title">AGB • Datenschutz • Impressum</div>
        </FooterBlock>
    );
};

export default Footer;
