import { createContext, useState } from "react";

const AppContext = createContext()

const DataProvider = ({ children }) => {

    const [formData, setFormData] = useState({ url: '', type: 'GET' })
    const [paramData, setParamData] = useState([{ id: 1, key: '', value: '', check: false }])
    const [headerData, setHeaderData] = useState([{ id: 1, key: '', value: '', check: false }])
    const [jsonText, setJsonText] = useState('')
    // console.log("Param: ", paramData)
    // console.log("Header: ", headerData)
    // console.log("JSON Text: ", jsonText)
    return (
        <AppContext.Provider
            value={{
                formData,
                setFormData,
                paramData,
                setParamData,
                headerData,
                setHeaderData,
                jsonText,
                setJsonText
            }}
        >
            {children}
        </AppContext.Provider>
    )
}

export { AppContext, DataProvider }