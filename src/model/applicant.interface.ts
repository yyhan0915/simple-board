/**
 * @property {number} id : original applicant's id - should be prime key
 * @property {string} name : name of applicant
 * @property {string} contact : contact of applicant
 * @property {string} email : email of applicant
 * @property {string} time : appointment time for meeting
 * @property {string} application_status : application status on going
 */

import { ApplicationStatus } from './application-status.enum';

export interface IApplicantData {
    id: number;
    name: string;
    contact: string;
    email: string;
    time: string;
    application_status: ApplicationStatus;
    bid?: number;
}
