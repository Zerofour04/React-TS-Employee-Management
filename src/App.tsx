import React from 'react';
import { MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import { authRequest } from "./config/msalConfig";
import Header from './component/Header';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import headerLogo from './pictures/logo-dialogdata.png'
import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from './store/employee/employeeSelectors';
import Input from './component/projects/input';
import ProjectList from './component/projects/list';
import Page from './component/page';


const App = () => {


  // @ts-ignore
  const ErrorComponent = (error:any) => {
    return <p>An Error Occurred: {error.error}</p>;
  }







  return (
    <MsalAuthenticationTemplate
      interactionType={InteractionType.Redirect}
      authenticationRequest={authRequest}
      errorComponent={ErrorComponent}>
        <Page/>
    </MsalAuthenticationTemplate>
  );
};

export default App;
