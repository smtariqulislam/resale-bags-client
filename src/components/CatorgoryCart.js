import React, { useContext } from 'react';
import { Link } from "react-router-dom";
import { StarIcon } from "@heroicons/react/24/solid";
import { AuthContext } from '../contexts/AuthProvider';

const CatorgoryCart = ({ product, setBookingProduct }) => {
  // console.log(product);

  // const {_id} = product;

  const { user } = useContext(AuthContext);

  return (
    <div className="p-6  rounded shadow-lg">
      <Link to="/coming-soon">
        <img
          alt="e-commerce"
          className="object-cover w-full h-80 mb-6 rounded shadow-lg"
          src={product.img}
        />
      </Link>
      <div className="mt-4">
        <h3 className="text-gray-500 text-xs tracking-widest title-font mb-1">
          {product.location}
        </h3>
        <h2 className="text-gray-900 title-font text-lg font-medium">
          {product.catorgory}
        </h2>
        <div>
          <p className="mt-1">Original Price: ${product.price}</p>
          <p className="mt-1">Price: ${product.oldprice}</p>
        </div>
        <div className="flex mt-1 mb-2">
          <StarIcon className="h3 w-3 text-green-500" />
          <StarIcon className="h3 w-3 text-green-500" />
          <StarIcon className="h3 w-3 text-green-500" />
          <StarIcon className="h3 w-3 text-green-500" />
          <StarIcon className="h3 w-3 text-green-500" />
          <span>{product.rating}</span>
        </div>
     

        {user?.email ? (
          <>
           
            <label
              htmlFor="my-modal-3"
              className="btn bg-violet-800 text-gray-100 hover:bg-violet-500"
              onClick={() => setBookingProduct(product)}
            >
              Details
            </label>
          </>
        ) : (
          <>
            <Link
              to="/login"
              className="btn bg-violet-800 text-gray-100 hover:bg-violet-500"
            >
              Details
            </Link>
          </>
        )}
      </div>
    </div>
  );
};

export default CatorgoryCart;