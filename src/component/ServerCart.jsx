import React from 'react';

const ServerCart = () => {
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