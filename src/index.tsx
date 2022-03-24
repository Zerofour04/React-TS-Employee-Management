import {PublicClientApplication} from "@azure/msal-browser";
import {msalConfiguration} from "./config/msalConfig";
import {Provider} from "react-redux";
import store from "./store";
import App from "./App";
import React from "react";
import {MsalProvider} from "@azure/msal-react";
import ReactDOM from "react-dom";

const pca = new PublicClientApplication(msalConfiguration);

const ProjectsApp = () => (
        <React.StrictMode>
            <Provider store={store}>
                <MsalProvider instance={pca}>
                    <App/>
                </MsalProvider>
            </Provider>
        </React.StrictMode>
);


ReactDOM.render(<ProjectsApp/>, document.getElementById("root"));

declare global {
    interface Window {
        _env_?: { [key: string]: string }
        _config_?: { [key: string]: string }
    }
}

