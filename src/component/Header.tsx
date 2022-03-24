import { useMsal } from "@azure/msal-react";

const Header = () => {
    
    const msal = useMsal()

    return (
        <h1>Welcome back {msal.accounts[0].name}</h1>
    )
};

export default Header;