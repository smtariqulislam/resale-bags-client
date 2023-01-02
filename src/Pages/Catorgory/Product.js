import React, { useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import BookingModal from '../../components/BookingModal';
import CatorgoryCart from '../../components/CatorgoryCart';

const Product = () => {

  const catorgory = useLoaderData();
  const [bookingProduct, setBookingProduct] = useState(null);
  // console.log(catorgory);


    return (
      <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
        <h2 className="mb-5 text-center text-4xl font-bold divide-y">
          Product
        </h2>

        <div className="grid gap-8 row-gap-5 mb-8 lg:grid-cols-3 lg:row-gap-8">
          {catorgory.map((product) => (
            <CatorgoryCart
              key={product._id}
              product={product}
              setBookingProduct={setBookingProduct}
            ></CatorgoryCart>
          ))}
        </div>

        {bookingProduct && (
          <BookingModal
            setBookingProduct={setBookingProduct}
            bookingProduct={bookingProduct}
          ></BookingModal>
        )}
      </div>
    );
};

export default Product;