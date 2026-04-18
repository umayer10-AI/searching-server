"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ServerCart = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    const handleCategory = (category) => {
        const params = new URLSearchParams(searchParams)
        // console.log(params)

        if(category==="All"){
            params.delete("category")
        }
        else{
            params.set("category",category)
        }

        router.push(`${path}?${params.toString()}`)
    }

    return (
        <div className='flex justify-center'>
            <select onChange={(e) => handleCategory(e.target.value)} className="select select-primary">
                <option>All</option>
                <option>Burger</option>
                <option>Pizza</option>
                <option>Biriyani</option>
                <option>Beverage</option>
                <option>Rice</option>
            </select>
        </div>
    );
};

export default ServerCart;