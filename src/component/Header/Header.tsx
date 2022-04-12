import { Container, Navbar } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';
import headerLogo from '../pictures/React-logo.png'
import { useRef } from "react";
import { useDetectOutsideClick } from './DropdownDetectOutside';
import "./Header.css";
import { useWebservice } from '../../hooks/useWebservice';
import { getUserRoles } from '../../store/userroles/userRoleActions';
import { useSelector } from 'react-redux';
import { selectUserRoles } from '../../store/userroles/userRoleSelectors';
import { selectSelectedEmployee } from '../../store/employee/employeeSelectors';
import { Avatar } from '@mui/material';

const Header = () => {

  useWebservice(true, getUserRoles)
  const userRoles = useSelector(selectUserRoles)

  const employee = useSelector(selectSelectedEmployee)
  
  const msal = useMsal()
  const { instance, accounts } = useMsal();

  const logOutHandler = () => {
    const logOutRequest = {
      account: accounts[0],
      postLogoutRedirectUri: "/"
    }
    instance.logoutRedirect(logOutRequest)
  };

  const dropdownRef = useRef(null);
  const [isActive, setIsActive] = useDetectOutsideClick(dropdownRef, false)
  const onClick = () => setIsActive(!isActive)

  return (
    <div>
      <Navbar bg="light" expand="lg" className='header-navbar'>
        <Container className="header-fix">
          <Navbar.Brand >
            <div className='title'>
              <img src={headerLogo} className="App-logo" alt="logo" width={150} />
              <>DDHub Administration</>
            </div>
          </Navbar.Brand>

          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
          </Navbar.Collapse>
          <div className="user-container">
            <div className="menu-container">
              <button onClick={onClick} className="menu-trigger">
                <span>{msal.accounts[0]?.name}</span>
                <div className="user-avatar">
                  <h4 className='user-avatar-acronym'>{employee?.acronym}</h4>
                </div>
              </button>
              <nav ref={dropdownRef} className={`menu ${isActive ? 'active' : 'inactive'}`}>
                <ul>
                  <li><a onClick={logOutHandler}>Log Out</a></li>
                  <li><a href="https://dialogdata.de/">Hompage</a></li>
                </ul>
              </nav>
            </div>
          </div>
          <div className="col-3 text-right d-flex justify-content-between flex-column pr-4 w-200">
          </div>
        </Container>
      </Navbar>
    </div>
  )
};

export default Header;