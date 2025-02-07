import { useAuth } from "../components/context/AuthContext";
import { Navigate } from "react-router-dom";
import { jwtDecode as jwt_decode } from 'jwt-decode';

const PrivateRoute = ({ element, roleRequired, ...rest }) => {
  const { isAuthenticated, userRole, token } = useAuth();
  console.log( isAuthenticated, userRole, token, "=====>private route");
  

  // Function to check token expiration
  const checkTokenExpiration = () => {
    if (!token) return true; // If no token, treat it as expired
    const decoded = jwt_decode(token);
    const currentTime = Date.now() / 1000;
    return decoded.exp < currentTime; // Check if token is expired
  };

  // Check if the user is authenticated and token is not expired
  // if (!isAuthenticated || checkTokenExpiration()) {
  if (!isAuthenticated) {
    return <Navigate to="/login" />;
  }

  // Check role-based access
  if (roleRequired && userRole !== roleRequired) {
    return <Navigate to="/unauthorized" />;
  }

  // Render the element if authenticated and role matches (or if no role is required)
  return element;
};

export default PrivateRoute;
