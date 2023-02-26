import React from 'react'
import { createContext } from 'react';
import {useState} from 'react'

export const searchContext = createContext()

const SearchContextProvider = ({ children }) => {
    const [q, setq] = useState("")
    return (
        <searchContext.Provider value={{ q, setq }}>
            {children}
        </searchContext.Provider>
    )
}

export default SearchContextProvider