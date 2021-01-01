import client from './client';

export const getApplicantData = () => client.get('http://127.0.0.1:3000/api/applicant');
