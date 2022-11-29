import React from 'react';

const Checkout = () => {


    const productData = {
      _id: "1",
      location: "Dhaka, Bangladesh",
      image: "kisu akta hobe",
      from: "17/11/2022",
      to: "21/11/2022",
      seller: {
        name: "rahim",
        email: "rahim@gmail",
        image: "kisu akta  hobe",
      },
      price: 10000,
      origin: 20000,
      useYear: "2day",
      reviews: 64
    };


    const handleBooking = () =>{
        console.log(productData)
    }


    return (
      <div>
        <section className="py-20 bg-gray-100 text-gray-800">
          <div className="container px-4 mx-auto">
            <div className="max-w-2xl mx-auto mb-16 text-center">
              <span className="font-bold tracking-wider uppercase text-violet-400">
                Dear customer
              </span>
              <h2 className="text-4xl font-bold lg:text-5xl">
                Confirm Your Oder
              </h2>
            </div>
            <div className="flex justify-center flex-wrap items-stretch -mx-4">
              <div className="flex  w-full mb-8 sm:px-4 md:w-1/2 lg:w-1/3 lg:mb-0">
                <div className="flex flex-col p-6 space-y-6 rounded shadow sm:p-8 bg-gray-100">
                  <div className="space-y-2">
                    <h4 className="text-2xl font-bold">Beginner</h4>
                    <span className="text-6xl font-bold">Free</span>
                  </div>
                  <p className="mt-3 leading-relaxed text-gray-800">
                    Etiam ac convallis enim, eget euismod dolor.
                  </p>
                  <ul className="flex-1 mb-6 text-gray-800">
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Aenean quis</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Morbi semper</span>
                    </li>
                    <li className="flex mb-2 space-x-2">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        className="flex-shrink-0 w-6 h-6 text-violet-400"
                      >
                        <path
                          fillRule="evenodd"
                          d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z"
                          clipRule="evenodd"
                        ></path>
                      </svg>
                      <span>Tristique enim nec</span>
                    </li>
                  </ul>
                  <button
                    onClick={handleBooking}
                    type="button"
                    className="inline-block px-5 py-3 font-semibold tracking-wider text-center rounded bg-violet-400 text-gray-900"
                  >
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Checkout;