import React from 'react';
import styled from 'styled-components';

const TodoContainerBlock = styled.div`
    width: 100%;
    border-radius: 4px;
    overflow: hidden;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);

    .app_name {
        background-color: #2c8161;
        color: white;
        height: 4rem;
        font-size: 1.5rem;
        display: flex;
        align-items: center;
        justify-content: center;
    }

    .content {
        background-color: white;
    }
`;

const TodoContainer: React.FC = ({ children }) => {
    return (
        <TodoContainerBlock>
            <div className="app_name">TodoApp</div>
            <div className="content">{children}</div>
        </TodoContainerBlock>
    );
};

export default TodoContainer;
