import React from "react";
import { useSelector } from "react-redux";
import { useMsal } from "@azure/msal-react";
import { selectLoggedInUser } from "../store/employee/employeeSelectors";
import headerLogo from '../pictures/logo-dialogdata.png'
import { msalConfiguration } from "../config/msalConfig";

const Header = () => {
    
    const msal = useMsal()

    return (
        <h1>Welcome back {msal.accounts[0].name}</h1>
    )
};

export default Header;