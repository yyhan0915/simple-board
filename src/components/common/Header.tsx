import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import palette, { device } from '../../styles/palette';
import HamburgerButton from '../navbar/HamburgerButton';
import MessageIcon from '../navbar/MessageIcon';

const HeaderBlock = styled.div`
    position: relative;
    height: 55px;
    display: flex;
    width: 100%;
    justify-content: space-between;
    align-items: center;
    padding: 1rem 0.75rem;
    background-color: ${palette.grey[1]};

    .button-icon {
        position: relative;
        padding: 10px;
        img {
            width: 1.5rem;
        }
    }

    .logo {
        display: flex;
        justify-content: center;
        align-items: center;
        position: absolute;
        left: 50%;
        top: 50%;
        transform: translate(-50%, -50%);
        img {
            width: 5rem;
        }
    }

    .headphone {
        span {
            font-family: Roboto;
            font-size: 16px;
            font-style: normal;
            font-weight: 700;
        }
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .button-panel {
        display: flex;
        align-items: center;
        justify-content: space-between;
        & > * {
            margin-right: 20px;
        }
        & > *:last-child {
            margin-right: 0px !important;
        }
    }

    @media ${device.mobile} {
        .onlyDesktop {
            display: none;
        }
    }

    @media ${device.laptop} {
        padding: 1rem 3.125rem;

        .onlyDesktop {
            display: block;
            transition: 1s;
        }

        .headphone {
            .letter {
                display: none;
            }
        }

        .logo {
            top: 50%;
            left: calc(1rem + 86px);
            transform: translateY(-50%);
        }
    }

    @media ${device.desktop} {
        .headphone {
            display: flex;
            .letter {
                display: block;
            }
        }
    }
`;

interface IProps {
    sample?: string;
}

const Header: React.FC<IProps> = () => {
    return (
        <HeaderBlock>
            <HamburgerButton />
            <div className="logo">
                <img src="/asset/image/logo-mcmakler.svg" alt="logo_mcmakler" />
            </div>
            <div className="button-panel">
                <div className="headphone onlyDesktop">
                    <IconButton className="button-icon">
                        <img src="/asset/image/btn-headphone.svg" alt="btn_headphone" />
                    </IconButton>
                    <span className="letter">Contact Support</span>
                </div>

                <MessageIcon hasNewMessage />
                <IconButton className="button-icon onlyDesktop">
                    <img src="/asset/image/btn-mask.svg" alt="btn_mask" />
                </IconButton>
                <IconButton className="button-icon onlyDesktop">
                    <img src="/asset/image/btn-power.svg" alt="btn_power" />
                </IconButton>
            </div>
        </HeaderBlock>
    );
};

export default Header;
