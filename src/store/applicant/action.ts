import { AppThunk } from '../actions';
import { GET_APPLICANT_LIST, GET_APPLICANT_LIST_FAILURE, GET_APPLICANT_LIST_SUCCESS } from './constants';
import * as api from '../../api/applicant';
import { IApplicantData } from '../../model/applicant.interface';

export const getApplicationList = (): AppThunk => async dispatch => {
    dispatch({ type: GET_APPLICANT_LIST });
    try {
        const response = await api.getApplicantData();
        dispatch({
            type: GET_APPLICANT_LIST_SUCCESS,
            payload: response.data.applicant,
        });
    } catch (error) {
        dispatch({
            type: GET_APPLICANT_LIST_FAILURE,
            payload: error,
            error: true,
        });
        throw error;
    }
};

export type ApplicantAction =
    | { type: typeof GET_APPLICANT_LIST_SUCCESS; payload: IApplicantData[] }
    | { type: typeof GET_APPLICANT_LIST_FAILURE; payload: Error };
