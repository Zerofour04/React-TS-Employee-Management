import {RequestState} from '../request/requestStateModels';

export interface EmployeeState {
    requestState: RequestState;
    employees: Employee[];
    selectedEmployee?: Employee;
}

export interface Employee {
    email: string;
    firstName: string | null;
    lastName: string | null;
    fullName: string | null;
    groups: string[] | null;
    acronym: string;
    location: {
        countryIsocode: string;
        regionIsocode: string
    };
    displayName: string;
    active: boolean;
    locked: boolean;
    visible: boolean;
}
