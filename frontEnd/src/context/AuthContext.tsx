import { createContext, useContext, useState, ReactNode } from 'react';

interface AuthContextType {
    isAuthenticated: boolean;
    userRole: 'user' | 'admin' | 'staff' | null;
    token: string;
    login: (role: 'user' | 'admin' | 'staff', token: string) => void;
    logout: () => void;
}

const AuthContext = createContext<AuthContextType | undefined>(undefined);

interface AuthProviderProps {
    children: ReactNode;
}



export const AuthProvider = ({ children }: AuthProviderProps) => {
    const [isAuthenticated, setIsAuthenticated] = useState<boolean>(false);
    const [userRole, setUserRole] = useState<'user' | 'admin' | 'staff' | null>(null);
    const [token, setToken] = useState<string>('');
    

    const login = (role: 'user' | 'admin' | 'staff', token: string) => {
        setIsAuthenticated(true);
        setUserRole(role);
        setToken(token);
    };

    const logout = () => {
        setIsAuthenticated(false);
        setUserRole(null);
        setToken('');
    };

    return (
        <AuthContext.Provider value={{ isAuthenticated, userRole, token, login, logout }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => {
    const context = useContext(AuthContext);
    if (!context) {
        throw new Error("useAuth must be used within an AuthProvider");
    }
    return context;
};
