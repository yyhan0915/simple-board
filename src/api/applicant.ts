import client from './client';

export const getApplicantData = () => client.get('https://protected-chamber-74845.herokuapp.com/api/applicant');
