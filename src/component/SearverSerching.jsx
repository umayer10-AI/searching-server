"use client"
import { Data } from '@/context/Context';
import { usePathname, useRouter, useSearchParams } from 'next/navigation';
import React, { useContext } from 'react';

const SearverSerching = () => {

    const {i,setI} = useContext(Data)

    const searchParams = useSearchParams()
    // console.log(searchParams)
    const router = useRouter()
    const path = usePathname()

    const a = () => {
        const params = new URLSearchParams(searchParams)
        // console.log(params)
        if(i){
            params.set("search",i)
        }
        else{
            params.delete("search")
        }

        router.push(`${path}?${params.toString()}`)
    }

    // console.log(i)

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