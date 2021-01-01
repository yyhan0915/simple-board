import React from 'react';
import styled from 'styled-components';
import { useTranslation } from '../../i18n';
import palette, { device } from '../../styles/palette';
import FigureBoxes from './FigureBoxes';

const ApplicantBarBlock = styled.div`
    font-size: 1.5rem;
    font-weight: 700;
    line-height: 24px;
    height: 5rem;
    padding: 1rem;
    display: flex;
    align-items: center;
    justify-content: space-between;
    background-color: ${palette.grey[0]};

    .title {
        display: flex;
        align-items: center;
        text-transform: capitalize;

        img {
            margin-right: 16px;
        }
    }

    @media ${device.laptop} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;
    }
`;

interface IProps {
    sample?: string;
}

const ApplicantBar: React.FC<IProps> = () => {
    const { t } = useTranslation();

    return (
        <ApplicantBarBlock>
            <div className="title">
                <img src="/asset/image/arrow-backward.svg" />
                <span>{t('applicants')}</span>
            </div>
            <FigureBoxes />
        </ApplicantBarBlock>
    );
};

export default ApplicantBar;
