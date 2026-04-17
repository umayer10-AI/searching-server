import Context from '@/context/Context';
import React from 'react';

const Providers = ({children}) => {
    return (
        <div>
            <Context>
                {children}
            </Context>
        </div>
    );
};

export default Providers;