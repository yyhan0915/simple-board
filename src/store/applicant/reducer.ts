import { Reducer } from 'redux';
import { ApplicantAction } from './action';
import { GET_APPLICANT_LIST_FAILURE, GET_APPLICANT_LIST_SUCCESS } from './constants';
import { initialState, InitialStateType } from './states';

const applicant: Reducer<InitialStateType, ApplicantAction> = (state = initialState, action) => {
    switch (action.type) {
        case GET_APPLICANT_LIST_SUCCESS:
            return {
                ...state,
                applicant: [...action.payload],
            };
        case GET_APPLICANT_LIST_FAILURE:
            return {
                ...state,
                applicantError: action.payload,
            };
        default:
            return {
                ...state,
            };
    }
};

export default applicant;
