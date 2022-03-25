import React from 'react';
import { MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import { InteractionType } from "@azure/msal-browser";
import { authRequest } from "./config/msalConfig";
import Header from './component/Header/Header';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import headerLogo from './pictures/logo-dialogdata.png'

import "./App.css";
import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown, Row, Col, Card, Form } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import { useSelector } from 'react-redux';
import { selectLoggedInUser } from './store/employee/employeeSelectors';
import Page from './component/Sidebar/page';
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
