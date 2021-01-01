import client from './client';

export const getApplicantData = () => client.get('https://mcmakler-assignment-app.herokuapp.com/api/applicant');
