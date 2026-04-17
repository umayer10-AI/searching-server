import ClientCart from '@/component/ClientCart';
import Searching from '@/component/Searching';
import React from 'react';

const page = () => {
  return (
    <div>
      <h2 className='text-3xl font-bold text-center my-10'>Client</h2>
      <Searching></Searching>
      <ClientCart></ClientCart>
    </div>
  );
};

export default page;