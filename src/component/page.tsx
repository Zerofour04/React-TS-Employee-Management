import React from "react";
import { Button, Container, Nav, Navbar, NavbarBrand, NavDropdown } from 'react-bootstrap';
import { useSelector } from 'react-redux';
import { selectLoggedInUser } from '../store/employee/employeeSelectors';
import { MsalAuthenticationTemplate, useMsal } from '@azure/msal-react';
import { BrowserRouter, Link, Route, Routes } from "react-router-dom";
import Header from "./Header";
import ProjectList from "./projects/list";

const Page = () => {
    const msal = useMsal()
    console.log(msal)
    // @ts-ignore
    const ErrorComponent = ({ error }) => {
      return <p>An Error Occurred: {error}</p>;
    }
  
    const employee = useSelector(selectLoggedInUser)
    const {instance, accounts} = useMsal();
  
    const logOutHandler = () => {
        const logOutRequest = {
            account: accounts[0],
            postLogoutRedirectUri: "/projects"
        }
        instance.logoutRedirect(logOutRequest)
        
    };

    return (
        <div>
        <Button onClick={logOutHandler}>Log out</Button>
        <Navbar bg="light" expand="lg">
          <Container>
            <Navbar.Brand href="#home">
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="basic-navbar-nav" />
            <Navbar.Collapse id="basic-navbar-nav">
              <Nav className="me-auto">
                <Nav.Link href="">Home</Nav.Link>
                <Nav.Link href="projects">Projects</Nav.Link>
                <Nav.Link href="mission-assignments">Mission assignments</Nav.Link>
                <Nav.Link href="business-domains">Business Domains</Nav.Link>
                <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                  <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                  <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                  <NavDropdown.Divider />
                </NavDropdown>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>


        <Routes>
          <Route path="" element={<Header />} />
          <Route path="/projects" element={<ProjectList/>} />
          <Route path="/mission-assignments" />
          <Route path="/business-domains" />
        </Routes>
      </div>
    )

}

export default Page;