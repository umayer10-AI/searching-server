"use client"
import React, { createContext, useState } from 'react';

export const Data = createContext()

const Context = ({children}) => {

    const [c, setC] = useState([])
    const [all, setAll] = useState([])
    const [i, setI] = useState('')
    const [category,setcategory] = useState('')
    const [searching,setS] = useState('')
    
    return (
        <Data.Provider value={{c,setC,all,setAll,i,setI,category,setcategory,searching,setS}}>
            {children}
        </Data.Provider>
    );
};

export default Context;