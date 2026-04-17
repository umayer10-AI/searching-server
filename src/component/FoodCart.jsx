import Image from 'next/image';
import React from 'react';

const FoodCart = ({p}) => {
    return (
        <div className='space-y-2 rounded-2xl border p-4 bg-base-100'>
                <Image height={100} width={100} className='mx-auto' src={p.image_link} alt='logo'></Image>
                <h2 className='text-xl font-bold'>{p.dish_name}</h2>
                <div className='flex items-center justify-between'>
                    <h2>{p.price}</h2>
                    <h2>{p.rating}</h2>
                </div>
                <button className='btn btn-error'>Details</button>
            </div>
    );
};

export default FoodCart;