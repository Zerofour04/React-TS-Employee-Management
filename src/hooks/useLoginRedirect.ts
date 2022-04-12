import {useEffect} from "react";
import {useLocation, useNavigate} from "react-router-dom";
import {useIsAuthenticated} from "@azure/msal-react";

const LOCATION_KEY = 'initialLocation';
export const useLoginRedirect = () => {
    const isLoggedIn = useIsAuthenticated();
    const location = useLocation();
    const navigate = useNavigate();
    useEffect(() => {
        const targetLocation = localStorage.getItem(LOCATION_KEY);
        const currentLocation = location.pathname + location.search + location.hash;
        if (!isLoggedIn && location.pathname !== '/') {
            localStorage.setItem(LOCATION_KEY, currentLocation);
            navigate('/');
        } else if (isLoggedIn && targetLocation) {
            localStorage.removeItem(LOCATION_KEY);
            navigate(targetLocation);
        }
    })
} 
