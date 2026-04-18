"use client"
import { Data } from '@/context/Context';
import React, { useContext } from 'react';

const SearverSerching = () => {

    const {all,setAll,i,setI} = useContext(Data)

    const a = () => {
        
    }

    console.log(i)

    return (
        <div className='flex justify-center items-center gap-5'>
            <div className='flex items-center'>
                <input onChange={(e) => setI(e.target.value)} type="text" placeholder="Search" className="input input-accent" />
                <input onClick={a} type="submit" value={"Search"} className='btn btn-accent' />
            </div>
        </div>
    );
};

export default SearverSerching;