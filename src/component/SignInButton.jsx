import React from "react";
import { useMsal } from "@azure/msal-react";
import Button from "react-bootstrap/Button";
import { loginRequest } from "../config/msalConfig";

function handleLogin(instance) {
    instance.loginPopup(loginRequest).catch(e => {
        console.error(e);
    });
}

export const SignInButton = () => {
    const { instance } = useMsal();
    
    return (
        <Button variant="secondary" className="ml-auto" onClick={() => handleLogin(instance)}>Sign In</Button>
    )

}