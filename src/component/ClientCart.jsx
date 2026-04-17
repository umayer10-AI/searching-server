"use client"
import { Data } from '@/context/Context';
import Image from 'next/image';
import React, { useContext, useEffect, useState } from 'react';
import FoodCart from './FoodCart';

const ClientCart = () => {

    const {c,setC} = useContext(Data)

    useEffect(() => {
        const a = async () => {
            const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods`)
            const data = await res.json()
            setC(data.data)
        }
        a()
    },[])

    // console.log(c)

    return (
        <div className='max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                c.map(v => <FoodCart key={v.id} p={v}></FoodCart>)
            }
        </div>
    );
};

export default ClientCart;