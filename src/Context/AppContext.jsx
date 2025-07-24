import {createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    const [responsive, setResponsive] = useState(window.innerWidth <= 768);
    const [active, setActive] = useState("all");

    useEffect(() => {
        const handleResize = () => {
            setResponsive(window.innerWidth <= 768);
        };


        window.addEventListener('resize', handleResize)

        handleResize()
        return () => window.removeEventListener('resize', handleResize)
    }, [])

    const ContextValue = {
        user,
        setUser,
        responsive,
        setResponsive,
        active,
        setActive
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)