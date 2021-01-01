import React from 'react';
import { useSelector } from 'react-redux';
import styled from 'styled-components';
import { device } from '../../styles/palette';
import FigureBox from '../common/FigureBox';

const FigureBoxesBlock = styled.div`
    display: flex;

    @media ${device.mobile} {
        display: none;
    }

    @media ${device.laptop} {
        display: flex;
    }
`;

interface IProps {
    sample?: string;
}

const FigureBoxes: React.FC<IProps> = () => {
    const { applicants } = useSelector(({ applicant }: RootState) => ({
        applicants: applicant.applicant,
    }));

    const applicantsByStatus = [
        {
            groupName: 'Appointment set',
            data: applicants.filter(applicant => applicant.application_status == 'appointment_set'),
        },
        {
            groupName: 'Property viewed',
            data: applicants.filter(applicant => applicant.application_status == 'property_viewed'),
        },
        {
            groupName: 'Interested',
            data: applicants.filter(applicant => applicant.application_status == 'interested'),
        },
        {
            groupName: 'Offer accepted',
            data: applicants.filter(applicant => applicant.application_status == 'offer_accepted'),
        },
    ];

    return (
        <FigureBoxesBlock>
            <FigureBox value={applicants.length} title="total" />
            <FigureBox value={10} title="new" />
            <FigureBox value={applicantsByStatus[1].data.length} title="viewed" />
            <FigureBox value={applicantsByStatus[0].data.length} title="app" />
            <FigureBox value={6} title="others" />
        </FigureBoxesBlock>
    );
};

export default FigureBoxes;
