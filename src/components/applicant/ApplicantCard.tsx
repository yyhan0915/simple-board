import { Avatar, Card, makeStyles } from '@material-ui/core';
import React from 'react';
import styled from 'styled-components';
import { IApplicantData } from '../../model/applicant.interface';
import palette from '../../styles/palette';
import { generateColorFromString } from '../../utils/generateColor';

const ApplicantCardBlock = styled(Card)`
    height: 241px;
    width: 305px;
    min-width: 305px;
    max-width: 305px;
    border-radius: 4px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 1.5rem;
    font-size: 1rem;
    margin-bottom: 1.5rem;

    .name {
        font-weight: 700;
    }

    .contact,
    .email,
    .name {
        height: 1.5rem !important;
        display: flex;
        justify-content: center;
        align-items: center;
    }

    .email {
        margin-bottom: 8px;
    }

    .appointment-date {
        width: 11.25rem;
        height: 1.125rem;
        line-height: 0;
        color: ${palette.grey[0]};
        font-weight: 700;
        background-color: ${palette.grey[4]};
        font-size: 0.75rem;
        border-radius: 3px;
        display: flex;
        justify-content: center;
        align-items: center;
        margin-bottom: 0.5rem;
    }

    .bid {
        background-color: ${palette.yellow[0]};
        height: 1rem;
        display: flex;
        justify-content: center;
        align-items: center;
        color: ${palette.grey[0]};
        min-width: 5rem;
        border-radius: 3px;
        font-size: 12px;
        font-weight: 700;
        padding: 4px 8px;
        line-height: 0;
    }
`;

const useStyles = makeStyles<{}, IApplicantData>(() => ({
    avatar: {
        backgroundColor: applicant => generateColorFromString(applicant.name),
        minWidth: '4.375rem',
        maxWidth: '4.375rem',
        height: '4.375rem',
        marginBottom: '0.5rem',
        fontWeight: 700,
        fontSize: '1rem',
        color: applicant => generateColorFromString(applicant.email),
    },
}));

interface IProps {
    applicant: IApplicantData;
}

const ApplicantCard: React.FC<IProps> = ({ applicant }) => {
    const classes = useStyles(applicant);

    return (
        <ApplicantCardBlock variant="outlined">
            <div className="name-icon">
                <Avatar aria-label="recipe" className={classes.avatar}>
                    {applicant.name.split(/[ \x2D]/).reduce((result, element) => (result += element.slice(0, 1)), ' ')}
                </Avatar>
            </div>
            <div className="name">{applicant.name}</div>
            <div className="contact">{applicant.contact}</div>
            <div className="email">{applicant.email}</div>
            <div className="appointment-date">APPOINTMENT {applicant.time}</div>
            {applicant.bid && <div className="bid">BID {applicant.bid?.toLocaleString()}€</div>}
        </ApplicantCardBlock>
    );
};

export default ApplicantCard;
