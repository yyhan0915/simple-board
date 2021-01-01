import React from 'react';
import styled from 'styled-components';
import palette from '../../styles/palette';

const FilterBoxBlock = styled.div`
    width: 5rem;
    height: 2.8rem;
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid ${palette.grey[9]};
    font-size: 14px;
    line-height: 20px;
    padding-right: 1rem;
    padding-left: 1rem;
    font-weight: 400;

    & + & {
        margin-left: 8px;
    }
`;

interface IProps {
    title: string;
}

const FilterBox: React.FC<IProps> = ({ title }) => {
    return (
        <FilterBoxBlock>
            <div className="title">{title} </div>
            <img src="/asset/image/arrow_drop_down.svg" alt="icon_arrow" />
        </FilterBoxBlock>
    );
};

export default FilterBox;
