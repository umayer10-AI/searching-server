import FoodCart from '@/component/FoodCart';
import Searching from '@/component/Searching';
import SearverSerching from '@/component/SearverSerching';
import ServerCart from '@/component/ServerCart';
import React from 'react';

const wholeData = async (category="", search="") => {

    const res = await fetch(`https://phi-lab-server.vercel.app/api/v1/lab/foods?category=${category}&search=${search}`)
    const data = await res.json()
    return data.data
}

const page = async ({searchParams}) => {

    const sp = await searchParams
    console.log(sp)
    const data = await wholeData(sp.category, sp.search)

    return (
        <div>
            <h2 className='text-3xl font-bold text-center my-5'>Server</h2>
            <div className='flex justify-center items-center gap-6 my-5'>
                <SearverSerching></SearverSerching>
                <ServerCart></ServerCart>
            </div>
            
            <div className='max-w-[80%] mx-auto grid grid-cols-1 lg:grid-cols-3 gap-5'>
            {
                data.map(v => <FoodCart key={v.id} p={v}></FoodCart>)
            }
        </div>
        </div>
    );
};

export default page;