import {createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [responsive, setResponsive] = useState(window.innerWidth <= 768);

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth <= 768);
        };


        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const ContextValue = {
        responsive,
        setResponsive
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)