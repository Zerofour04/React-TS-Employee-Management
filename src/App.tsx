import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from "@azure/msal-browser";
import {authRequest} from "./config/msalConfig";

const App = () => {

    // @ts-ignore
    const ErrorComponent = ({error}) => {
        return <p>An Error Occurred: {error}</p>;
    }

    return (
            <MsalAuthenticationTemplate
                    interactionType={InteractionType.Redirect}
                    authenticationRequest={authRequest}
                    errorComponent={ErrorComponent}>
                      <h1>Test</h1>
            </MsalAuthenticationTemplate>
    );
};

export default App;
