"use client"
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React from 'react';

const ServerCart = () => {

    const searchParams = useSearchParams()
    const router = useRouter()
    const path = usePathname()

    return (
        <div className='flex justify-center'>
            <select className="select select-primary">
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