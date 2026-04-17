"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [c, setC] = useState([])
    
    return (
        <Data.Provider value={{c,setC}}>
            {children}
        </Data.Provider>
    );
};

export default Context;