import { createContext, useState } from "react";

const AppContext = createContext()

const DataProvider = ({ children }) => {

    const [formData, setFormData] = useState({ url: '', type: 'GET' })

    return (
        <AppContext.Provider
            value={{
                formData,
                setFormData
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, DataProvider }