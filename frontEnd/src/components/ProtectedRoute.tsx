import React from 'react';
import { Navigate, Outlet } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import { generalRoutes } from '../pages/AllRoutes';


interface ProtectedRouteProps {
    requiredRoles: Array<'user' | 'admin' | 'staff'>;
    setShowLogin: React.Dispatch<React.SetStateAction<boolean>>;
}

const ProtectedRoute: React.FC<ProtectedRouteProps> = ({ requiredRoles, setShowLogin }) => {
    const { isAuthenticated, userRole } = useAuth();

    if (!isAuthenticated) {
        setShowLogin(true);
        return <Navigate to={generalRoutes.home} replace />;
    }
    else setShowLogin(false);


    if (!requiredRoles.includes(userRole as 'user' | 'admin' | 'staff')) {
        setShowLogin(false);
        return <Navigate to={generalRoutes.home} replace />;
    }

    return <Outlet />;
};

export default ProtectedRoute;
