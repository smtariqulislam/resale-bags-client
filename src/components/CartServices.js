import React from 'react';
import { Link } from 'react-router-dom';

const CartServices = ({cn}) => {
   
    return (
      <div className="px-4 py-5  rounded shadow-lg">
        <Link to={`/catorgory/${cn.catorgory}`}>
          <div>
            <h1 className="mt-2 text-center text-lg font-bold text-violet-500">
              {cn.catorgory}
            </h1>
          </div>
        </Link>
      </div>
    );
};

export default CartServices;