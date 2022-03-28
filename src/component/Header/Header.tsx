
import { Container, Navbar } from 'react-bootstrap';
import { useMsal } from '@azure/msal-react';
import headerLogo from ''
import { useRef } from "react";
import { useDetectOutsideClick } from './DropdownDetectOutside';
import "./Header.css";

const Header = () => {
  
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
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand>
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
                <img src="https://steamcdn-a.akamaihd.net/steamcommunity/public/images/avatars/df/df7789f313571604c0e4fb82154f7ee93d9989c6.jpg" alt="User avatar" />
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