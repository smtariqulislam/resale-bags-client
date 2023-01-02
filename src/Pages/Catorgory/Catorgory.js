
import React, { useEffect, useState } from 'react';
// import BookingModal from '../../components/BookingModal';
import CartServices from '../../components/CartServices';
// import CatorgoryCart from '../../components/CatorgoryCart';



const Catorgory = () => {
    // const [catorgory,setCatorgory] =useState([])
    const [catorgoryName,setCatorgoryName]=useState([]);

    //  const [selected, setSelected] = useState(new Date());
    // const [bookingProduct,setBookingProduct] = useState(null);

    // useEffect(()=>{
    //     fetch("https://server-site-psi.vercel.app/product")
    //       .then((res) => res.json())
    //       .then((data) => {
    //         // console.log(data);
    //         setCatorgory(data);
    //       });
    // },[])

    useEffect(()=>{
        fetch("https://server-site-psi.vercel.app/catorgory")
          .then((res) => res.json())
          .then((data) => {
            console.log(data);
            setCatorgoryName(data);
          });
    },[])


    return (
      <div className="px-4 py-5 bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <h2 className="mb-5 text-center text-4xl font-bold divide-y">
          All Catorgory
        </h2>
        {catorgoryName.map((cn) => (
          <CartServices key={cn._id} cn={cn}></CartServices>
        ))}

        {/* <div className="px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-20">
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
        </div>

        {bookingProduct && (
          <BookingModal
            setBookingProduct={setBookingProduct}
            bookingProduct={bookingProduct}
          ></BookingModal>
        )} */}
      </div>
    );
};

export default Catorgory;