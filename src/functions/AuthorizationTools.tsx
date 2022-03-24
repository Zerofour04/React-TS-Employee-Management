import {Employee} from "../store/employee/employeeModels";

export const PMO_ORGA = 'pmo-orga';
export const VACATION_ADMINISTRATOR = 'vacation-admin';
export const TEAM_MANAGER = 'teammanager';
export const VACATION_DELEGATE = 'vacation-delegate';
export const SALES_MANAGER = 'sales-manager';
export const PERSONNEL_MANAGER = 'personnel-manager';
export const NONE = 'None';

export const hasAnyRole = (employee: Employee | undefined, ...permittedGroups: string[]): boolean => {
    return employee !== undefined && employee.groups?.some(group => permittedGroups.indexOf(group) >= 0) === true;
}
