import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n';
import palette, { device } from '../../styles/palette';

const FigureBoxBlock = styled.div`
    width: 5rem;
    height: 2.8rem;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;

    .value {
        font-size: 20px;
        font-weight: 700;
        line-height: 24px;
    }

    .title {
        font-size: 14px;
        font-weight: 400;
        line-height: 20px;
        text-transform: capitalize;
    }

    & + & {
        border-left: 1px solid ${palette.grey[9]};
    }

    @media ${device.desktop} {
        width: 6.5rem;
    }
`;

interface IProps {
    value: number;
    title: string;
}

const FigureBox: React.FC<IProps> = ({ value, title }) => {
    const { t } = useTranslation();

    return (
        <FigureBoxBlock>
            <div className="value">{value}</div>
            <div className="title">{t(title)}</div>
        </FigureBoxBlock>
    );
};

export default FigureBox;
