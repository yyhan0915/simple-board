import { Backdrop, Fade, Modal } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';

const Loading = styled.div<{ width: string; height: string }>`
    position: relative;
    background: transparent;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: ${props => props.width && props.width + 'px'};
    height: ${props => props.height && props.height + 'px'};

    @keyframes spin {
        from {
            transform: rotate(0);
        }
        to {
            transform: rotate(360deg);
        }
    }

    .spinner {
        width: 100%;
        height: 100%;
        animation-name: spin;
        animation-duration: 1s;
        animation-iteration-count: infinite;
        animation-timing-function: linear;
    }

    .center {
        position: absolute;
        width: 50%;
        height: 50%;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
    }

    &:focus {
        outline: none;
    }
`;

interface LoadingSpinnerProps {
    open: boolean;
    width: string;
    height: string;
}
const LoadingSpinner: React.FC<LoadingSpinnerProps> = ({ open, width, height }) => {
    return (
        <Modal
            open={open}
            closeAfterTransition
            BackdropComponent={Backdrop}
            BackdropProps={{
                timeout: 500,
            }}
        >
            <Fade in={open}>
                <Loading width={width} height={height}>
                    <img className="spinner" src="/asset/image/icon-spinner.svg" alt="icon-spinner" />
                </Loading>
            </Fade>
        </Modal>
    );
};

export default LoadingSpinner;
