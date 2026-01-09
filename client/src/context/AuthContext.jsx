import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';

const AuthContext = createContext();

export const AuthProvider = ({ children }) => {
    const [user, setUser] = useState(null);
    const [token, setToken] = useState(localStorage.getItem('token'));
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (token) {
            axios.defaults.headers.common['x-auth-token'] = token;
            localStorage.setItem('token', token);
            // Ideally verify token with backend here, for now decoding or persisting
            // Simplified: Just keep user logged in if token exists
        } else {
            delete axios.defaults.headers.common['x-auth-token'];
            localStorage.removeItem('token');
        }
        setLoading(false);
    }, [token]);

    const register = async (userData) => {
        const res = await axios.post('http://localhost:5000/api/auth/register', userData);
        setToken(res.data.token);
        setUser(res.data.user);
    };

    const login = async (userData) => {
        const res = await axios.post('http://localhost:5000/api/auth/login', userData);
        setToken(res.data.token);
        setUser(res.data.user);
    };

    const logout = () => {
        setToken(null);
        setUser(null);
    };

    return (
        <AuthContext.Provider value={{ user, token, register, login, logout, loading }}>
            {children}
        </AuthContext.Provider>
    );
};

export const useAuth = () => useContext(AuthContext);
