import {MsalAuthenticationTemplate} from '@azure/msal-react';
import {InteractionType} from "@azure/msal-browser";
import {authRequest} from "./config/msalConfig";
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Page from './page/Page';
import {useLoginRedirect} from "./hooks/useLoginRedirect";

const App = () => {
    useLoginRedirect();
    // @ts-ignore
    const ErrorComponent = (error: any) => {
        return <p>An Error Occurred: {error.error}</p>;
    }

    return (
        <MsalAuthenticationTemplate
            interactionType={InteractionType.Redirect}
            authenticationRequest={authRequest}
            errorComponent={ErrorComponent}>
            <Page/>
        </MsalAuthenticationTemplate>)
        ;
};

export default App;
