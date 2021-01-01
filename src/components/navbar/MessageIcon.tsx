import { IconButton } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

/**
 * @description messageIcon component at header
 *  @prop {boolean} hasNewMessage props for when there is new message for user
 */

const MessageIconBlock = styled(IconButton)`
    position: relative;

    img {
        width: 1.5rem;
        margin-right: 0 !important;
    }

    .messageIcon__newMessage {
        width: 8px;
        border-radius: 50%;
        background-color: #c73030;
        height: 8px;
        position: absolute;
        right: 0.5rem;
        top: 0.5rem;
        z-index: 1;
        padding: 3px;
        border: 3px solid ${palette.grey[1]};
    }
`;

interface IProps {
    hasNewMessage?: boolean;
}

const MessageIcon: React.FC<IProps> = ({ hasNewMessage }) => {
    return (
        <MessageIconBlock>
            <img src="/asset/image/btn-message.svg" alt="btn_hamburger" />
            {hasNewMessage && <div className="messageIcon__newMessage"></div>}
        </MessageIconBlock>
    );
};

export default MessageIcon;
