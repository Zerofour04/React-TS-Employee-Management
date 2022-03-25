import { MsalAuthenticationTemplate } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import { authRequest } from "./config/msalConfig";
import Header from './component/Header/Header';
import "./App.css";
import 'bootstrap/dist/css/bootstrap.min.css';
import Sidebar from './component/Sidebar/Sidebar';
import './component/Sidebar/Sidebar.css'

const App = () => {

  // @ts-ignore
  const ErrorComponent = (error: any) => {
    return <p>An Error Occurred: {error.error}</p>;
  }

  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}>
      <main>
       
        <Header /> <Sidebar isOpen={false} />
      </main>
      

    </MsalAuthenticationTemplate >
  );
};

export default App;
