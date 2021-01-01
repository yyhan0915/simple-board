import React, { useCallback, useEffect, useState } from 'react';
import { shallowEqual, useDispatch, useSelector } from 'react-redux';
import styled from 'styled-components';
import { getApplicationList } from '../../store/applicant';
import palette, { device } from '../../styles/palette';
import LoadingSpinner from '../common/LoadingSpinner';
import SnackBar from '../common/SnackBar';
import ApplicantBar from './ApplicantBar';
import ApplicantCardList from './ApplicantCardList';
import SearchBar from './SearchBar';

const ApplicantBoardBlock = styled.div`
    @media ${device.laptop} {
        padding-left: 50px;
        padding-right: 50px;
        background-color: ${palette.grey[1]};
    }
`;

interface IProps {
    searchTerm?: string;
}

const ApplicantBoard: React.FC<IProps> = ({ searchTerm }) => {
    const { applicants, applicantError } = useSelector(
        ({ applicant }: RootState) => ({
            applicants: applicant.applicant,
            applicantError: applicant.applicantError,
        }),
        shallowEqual,
    );
    const [isSnackBarOpen, setIsSnackBarOpen] = useState<boolean>(false);
    const [snackBarMessage, setSnackBarMessage] = useState<string>('');
    const snackBarOpenHandler = useCallback(() => {
        setIsSnackBarOpen(false);
    }, []);
    const [loading, setLoading] = useState<boolean>(true);
    const searchedApplicants = searchTerm
        ? applicants.filter(applicant => applicant.name.includes(searchTerm))
        : applicants;
    const dispatch = useDispatch();

    useEffect(() => {
        async function getApplicantsData() {
            await dispatch(getApplicationList());
            setLoading(false);
        }
        getApplicantsData();
    }, []);

    useEffect(() => {
        if (applicantError) {
            setLoading(false);
            setSnackBarMessage('Failed to get applicant list');
            setIsSnackBarOpen(true);
        }
    }, [applicantError]);

    const applicantsByStatus = [
        {
            groupName: 'appointmentSet',
            data: searchedApplicants.filter(applicant => applicant.application_status == 'appointment_set'),
        },
        {
            groupName: 'propertyViewed',
            data: searchedApplicants.filter(applicant => applicant.application_status == 'property_viewed'),
        },
        {
            groupName: 'interested',
            data: searchedApplicants.filter(applicant => applicant.application_status == 'interested'),
        },
        {
            groupName: 'offerAccepted',
            data: searchedApplicants.filter(applicant => applicant.application_status == 'offer_accepted'),
        },
    ];

    return (
        <>
            <ApplicantBoardBlock>
                <LoadingSpinner width="50" height="50" open={loading} />
                <ApplicantBar />
                <SearchBar />
                {applicantsByStatus.map(applicantGroup => {
                    return (
                        <ApplicantCardList
                            applicants={applicantGroup.data}
                            title={applicantGroup.groupName}
                            key={applicantGroup.groupName}
                        />
                    );
                })}
            </ApplicantBoardBlock>
            <SnackBar isOpen={isSnackBarOpen} message={snackBarMessage} handle={snackBarOpenHandler} />
        </>
    );
};

export default ApplicantBoard;
