import {useDispatch} from 'react-redux';
import {Dispatch, useEffect} from 'react';
import {IMsalContext, useMsal} from '@azure/msal-react';
import {InteractionRequiredAuthError, InteractionStatus} from '@azure/msal-browser';
import {authRequest} from '../config/msalConfig';

export const useWebservice = (condition: boolean, serviceAction: Function, ...parameters: any[]) => {
    const dispatch = useDispatch();
    const msalContext: IMsalContext = useMsal();
    useEffect(() => {
        if (!condition) {
            return;
        }
        callWebservice(msalContext, dispatch, serviceAction, ...parameters);
        // eslint-disable-next-line
    }, [dispatch, ...parameters, condition]);
};

export const callWebservice = (msalContext: IMsalContext,
                               dispatch: Dispatch<any>,
                               serviceAction: Function,
                               ...parameter: any[]) => {

    const accessTokenRequest = {
        scopes: authRequest.scopes,
        account: msalContext.accounts[0]
    };
    if (msalContext.inProgress === InteractionStatus.Startup || msalContext.inProgress === InteractionStatus.None) {
        msalContext.instance.acquireTokenSilent(accessTokenRequest).then((accessTokenResponse: any) => {
            const idToken = accessTokenResponse.idToken;
            dispatch(serviceAction({Authorization: `Bearer ${idToken}`}, ...parameter));
        }).catch((error: unknown) => {
            if (error instanceof InteractionRequiredAuthError) {
                msalContext.instance.acquireTokenRedirect(accessTokenRequest);
            }
            console.log(error);
        });
    }
};
