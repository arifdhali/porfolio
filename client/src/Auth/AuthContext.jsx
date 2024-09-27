import axios from 'axios';
import React, { createContext, useContext, useEffect, useState } from 'react';
import {Loader} from '../Utils/Loader';

const authContext = createContext();

const AdminContext = ({ children }) => {
    const [isAuthenticated, setIsAuthenticated] = useState(null);
    const getLoginAuth = async () => {
        try {
            const response = await axios.get(`${import.meta.env.VITE_API_URL}admin`);
            console.log('API response:', response.data);
            setIsAuthenticated(response?.data?.status ?? false);
        } catch (error) {
            setIsAuthenticated(false);
        }
    };

    useEffect(() => {
        getLoginAuth();
    }, []);

    if (isAuthenticated === null) {
        return <Loader />
    }

    return (
        <authContext.Provider value={{isAuthenticated , setIsAuthenticated}}>
            {children}
        </authContext.Provider>
    );
};

const useAuthContext = () => useContext(authContext);

export {
    AdminContext,
    useAuthContext
};