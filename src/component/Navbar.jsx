"use client"
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import React from 'react';

const Navbar = () => {
    const p = usePathname()
    return (
        <div className='flex items-center justify-center bg-base-100 py-4'>
            <div className='flex items-center gap-3'>
                <Link href={'/'} className={p==="/" ? 'btn btn-accent btn-outline': "btn"}>Client</Link>
                <Link href={'/server'} className={p==="/server" ? 'btn btn-accent btn-outline': "btn"}>Server</Link>
            </div>
        </div>
    );
};

export default Navbar;