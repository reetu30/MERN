import { useEffect } from 'react'
import { useNavigate } from 'react-router-dom';

const useCheckLogin = ({isAuthenticated, userRole}) => {
    const navigate = useNavigate();

    useEffect(()=>{
        if (isAuthenticated) {
            if (userRole === "user") {
                navigate('/profile');
            } else {
                navigate('/dashboard');
            }
        } else {
            navigate('/login');
        }
    }, [isAuthenticated, userRole, navigate])
    
  return null
}

export default useCheckLogin