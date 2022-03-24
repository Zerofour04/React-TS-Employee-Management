import {Configuration} from '@azure/msal-browser';

export const msalConfiguration: Configuration = {
    auth: {
        clientId: 'c30dc17f-54f5-4c59-98c3-83a254a5264a',
        authority: 'https://login.microsoftonline.com/3bed001c-7aa5-43a6-becc-1fc2f7c94a75'
    }
};

export const authRequest = {
    scopes: ['openid', 'profile']
};

export  const loginRequest = {
    scopes: ["User.Read"]
};