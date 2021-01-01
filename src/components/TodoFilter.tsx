import React from 'react';
import styled from 'styled-components';

const TodoFilterBlock = styled.div`
    width: 100%;
    display: flex;

    .filter_button {
        flex: 1;
        display: flex;
        justify-content: center;
        align-items: center;
        height: 43px;
        background: grey;
        color: white;
        cursor: pointer;

        &:nth-of-type(2) {
            border-left: none;
        }

        &:hover {
            background-color: #4cb2b6;
        }

        &.clicked {
            background-color: #4cb2b6;
        }
    }
`;

interface IProps {
    setFilters: React.Dispatch<React.SetStateAction<boolean[]>>;
    filters: boolean[];
}

const TodoFilter: React.FC<IProps> = ({ setFilters, filters }) => {
    return (
        <TodoFilterBlock>
            <div
                className={filters[0] ? 'filter_button clicked' : 'filter_button'}
                onClick={() => setFilters(prev => [!prev[0], false])}
            >
                완료된 일 정렬
            </div>
            <div
                className={filters[1] ? 'filter_button clicked' : 'filter_button'}
                onClick={() => setFilters(prev => [false, !prev[1]])}
            >
                할일 정렬
            </div>
        </TodoFilterBlock>
    );
};

export default TodoFilter;
