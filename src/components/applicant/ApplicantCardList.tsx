import React from 'react';
import ScrollContainer from 'react-indiana-drag-scroll';
import styled from 'styled-components';
import { useTranslation } from '../../i18n';
import { IApplicantData } from '../../model/applicant.interface';
import palette, { device } from '../../styles/palette';
import ApplicantCard from './ApplicantCard';

const ApplicantCardListWithoutContent = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${palette.grey[0]};
    min-height: 15.2vh;
`;

const ApplicantCardListBlock = styled.div`
    width: 100%;
    display: flex;
    flex-direction: column;
    padding-left: 1rem;
    padding-right: 1rem;
    background-color: ${palette.grey[0]};

    .title {
        font-size: 1.125rem;
        font-weight: 700;
        line-height: 1.5rem;
        margin-bottom: 1.5rem;
    }

    .list {
        display: flex;
        justify-content: flex-start;
    }

    .list {
        display: flex;
        overflow-x: auto;
        padding: 10px 24px;

        & > div {
            margin-right: 1.5rem;
        }

        &.active {
            background: rgba(255, 255, 255, 0.3);
            cursor: grabbing;
            cursor: -webkit-grabbing;
            transform: scale(1);
        }
    }

    @media ${device.mobile} {
        .list {
            display: flex;
            overflow-x: auto;
            flex-wrap: no-wrap;
        }
    }

    @media ${device.laptop} {
        padding-left: 1.5rem;
        padding-right: 1.5rem;

        .list {
            flex-wrap: wrap;
        }
    }
`;

interface IProps {
    applicants: IApplicantData[];
    title: string;
}

const ApplicantCardList: React.FC<IProps> = ({ applicants, title }) => {
    const { t } = useTranslation();

    if (applicants.length == 0) {
        return <ApplicantCardListWithoutContent></ApplicantCardListWithoutContent>;
    }

    return (
        <ApplicantCardListBlock>
            <div className="title">
                {t(title).charAt(0).toUpperCase() + t(title).slice(1)} ({applicants.length})
            </div>
            <ScrollContainer className="list" horizontal nativeMobileScroll>
                {applicants?.map(applicant => (
                    <ApplicantCard applicant={applicant} key={applicant.id} />
                ))}
            </ScrollContainer>
        </ApplicantCardListBlock>
    );
};

export default ApplicantCardList;
