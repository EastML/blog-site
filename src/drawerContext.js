import { createContext, useContext, useState } from "react";

const DrawerContext = createContext()

export const DrawerProvider = ({ children }) => {
    const [drawer, setDrawer] = useState(false)
    
    const toggleDrawer = () => setDrawer(!drawer)

    return (
        <DrawerContext.Provider value={{ drawer, toggleDrawer }}>
            {children}
        </DrawerContext.Provider>
    )
}

export const useDrawer = () => {
    const context = useContext(DrawerContext)
    if (context === undefined) {
        throw new Error ('useDrawer must be used within the DrawerProvider')
    }

    return context
}