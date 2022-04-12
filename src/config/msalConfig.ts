import {Configuration} from '@azure/msal-browser';

export const msalConfiguration: Configuration = {
    auth: {
        clientId: '',
        authority: ''
    }
};

export const authRequest = {
    scopes: ['openid', 'profile']
};
