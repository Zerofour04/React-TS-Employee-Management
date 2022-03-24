import React from "react";
import { Button, Container, Nav, Navbar } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../store/employee/employeeSelectors';
import { useMsal } from '@azure/msal-react';
import { Route, Routes } from "react-router-dom";
import headerLogo from '../pictures/logo-dialogdata.png'
import Header from "./Header";
import ProjectList from "./projects/list";

const Page = () => {
    const msal = useMsal()
    console.log(msal)
    // @ts-ignore
    const employee = useSelector(selectLoggedInUser)
    const {instance, accounts} = useMsal();

    const ErrorComponent = (error:any) => {
      return <p>An Error Occurred: {error.error}</p>;
    }
  
    const logOutHandler = () => {
        const logOutRequest = {
            account: accounts[0],
            postLogoutRedirectUri: "/"
        }
        instance.logoutRedirect(logOutRequest)
    };

    return (
        <div>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
            <img src={ headerLogo } className="App-logo" alt="logo" width={150}/>
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="/home">Home</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="mission-assignments">Mission assignments</Nav.Link>
                <Nav.Link href="business-domains">Business Domains</Nav.Link>
              </Nav>
            </Navbar.Collapse>
            <div className="col-3 text-right d-flex justify-content-between flex-column pr-4 w-200">
                    <div>
                        <Button onClick={logOutHandler}>Log out</Button>
                    </div>
                    <div className="mb-1">
                        <span className="float-right">Welcome {msal.accounts[0].name}</span>
                    </div>
                </div>
          </Container>
        </Navbar>

        <Routes>
          <Route path="/home" element={<Header />} />
          <Route path="/projects" element={<ProjectList/>} />
          <Route path="/mission-assignments" />
          <Route path="/business-domains" />
        </Routes>
      </div>
    )
}

export default Page;