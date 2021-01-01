import { IApplicantData } from './../../model/applicant.interface';

export type InitialStateType = {
    applicant: IApplicantData[];
    applicantError: null | Error;
};

export const initialState: InitialStateType = {
    applicant: [],
    applicantError: null,
};
