import { createContext, useContext, useEffect, useState } from 'react';
import { jwtDecode as jwt_decode } from 'jwt-decode';

const AuthContext = createContext();

export const useAuth = () => {
    return useContext(AuthContext);
};

export const AuthProvider = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);
    const [userRole, setUserRole] = useState(localStorage.getItem('role') || null);
    const [token, setToken] = useState(localStorage.getItem('token') || null);

    // login User
    const login = ({ token, role }) => {
        setUserRole(role);
        setToken(token);
        localStorage.setItem('token', token); // Store token as a plain string, not an object
        localStorage.setItem('role', role); // Store token as a plain string, not an object
        setIsAuthenticated(true);
    };

    // logout user
    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
        setToken(null);
        localStorage.removeItem('token');
    };

    const checkTokenExp = (token) => {
        if (!token) return false;
        try {
            const decoded = jwt_decode(token);
            const currentTime = Date.now() / 1000;
            return decoded.exp < currentTime;
        } catch (error) {
            return false; // If there's an error decoding, consider the token expired
        }
    };

    useEffect(() => {
        // if (token && checkTokenExp(token)) {
        // if (!token) {
        //     logout(); // logout user if token expired
        // } 
        if (token) {
            // const decoded = jwt_decode(token);
            setUserRole(userRole); // Set the role from decoded token
            setIsAuthenticated(true);  // The user is authenticated
        } 
        // else {
        //     setIsAuthenticated(false); // No token found, user is not authenticated
        // }
    }, [token, userRole]);

    console.log(isAuthenticated, '========isAuthenticated AuthContext');
    console.log(userRole, '========role AuthContext');
    console.log(token, '========token AuthContext');

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};
