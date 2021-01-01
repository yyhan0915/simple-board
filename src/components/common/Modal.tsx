import React, { useEffect } from 'react';
import { AiOutlineCheckCircle, AiOutlineInfoCircle, AiOutlineWarning } from 'react-icons/ai';
import { BiErrorCircle } from 'react-icons/bi';
import { ImCancelCircle } from 'react-icons/im';
import styled, { css } from 'styled-components';
import { FadeInAnimation } from '../../styles/animation';

const ModalBlock = styled.div<{ type: string }>`
    position: fixed;
    bottom: 10px;
    left: 10px;
    min-width: 400px;
    min-height: 60px;
    animation: 1s ${FadeInAnimation};
    background-color: ${props =>
        props.type == 'success'
            ? '#3a714c'
            : props.type == 'error'
            ? '#c23934'
            : props.type == 'warning'
            ? '#f7b65c'
            : '#898989'};
    display: flex;
    border-radius: 10px;
    color: white;
    padding: 5px;

    .icon,
    .close {
        width: 10%;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .icon {
        .icon_container {
            display: flex;
            justify-content: center;
            align-items: center;
            img {
                width: 13px;
                ${props =>
                    props.type == 'success' &&
                    css`
                        filter: invert(39%) sepia(19%) saturate(880%) hue-rotate(87deg) brightness(89%) contrast(83%);
                    `};
            }
        }
    }

    .content {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: center;
        padding-left: 10px;

        .title {
            margin-bottom: 5px;
        }

        .sub_content {
            font-weight: 200;
        }
    }

    .close {
        cursor: pointer;
    }
`;

interface IProps {
    sample?: string;
    type: 'success' | 'error' | 'info' | 'warning';
    onClose: () => void;
    message: string;
    title: string;
}

const Modal: React.FC<IProps> = ({ type = 'success', onClose, message, title }) => {
    useEffect(() => {
        setTimeout(() => {
            onClose();
        }, 3000);
    });

    return (
        <ModalBlock type={type}>
            <div className="icon">
                <div className="icon_container">
                    {type == 'success' && <AiOutlineCheckCircle style={{ fill: 'white' }} />}
                    {type == 'error' && <BiErrorCircle style={{ fill: 'white' }} />}
                    {type == 'info' && <AiOutlineInfoCircle style={{ fill: 'white' }} />}
                    {type == 'warning' && <AiOutlineWarning style={{ fill: 'white' }} />}
                </div>
            </div>
            <div className="content">
                <div className="title">{title}</div>
                <div className="sub_content">{message}</div>
            </div>
            <div className="close" onClick={onClose}>
                <ImCancelCircle />
            </div>
        </ModalBlock>
    );
};

export default React.memo(Modal);
