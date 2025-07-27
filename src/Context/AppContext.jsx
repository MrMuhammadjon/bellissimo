import {createContext, useContext, useEffect, useState } from "react";

export const AppContext = createContext();

export const AppContextProvider = ({ children }) => {
    const [user, setUser] = useState(false)
    const [responsive, setResponsive] = useState(window.innerWidth <= 768);
    const [active, setActive] = useState("all");
    const [addToCart, setAddToCart] =useState(()=>{
        const saveCart = localStorage.getItem('cart')
        try{
            const parsed = JSON.parse(saveCart);
             return Array.isArray(parsed) ? parsed : [];
        } catch (e){
            return []
        }
    })

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
        setActive,
        addToCart,
        setAddToCart
    }

    return (
        <AppContext.Provider value={ContextValue}>
            {children}
        </AppContext.Provider>
    )
}

export const useAppContext = () => useContext(AppContext)