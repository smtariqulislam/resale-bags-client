import React from 'react';
import { Link } from 'react-router-dom';

import logo from '../../assets/Waist bag-bro.png'

const Home = () => {
    return (
      <div className="px-4 py-5 bg-white mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
        <section className="text-gray-900">
          <div className="container flex flex-col justify-center p-6 mx-auto sm:py-12 lg:py-24 lg:flex-row lg:justify-between">
            <div className="flex items-center justify-center p-6 mt-8 lg:mt-0 h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128">
              <img
                src={logo}
                alt=""
                className="object-contain h-72 sm:h-80 lg:h-96 xl:h-112 2xl:h-128"
              />
            </div>
            <div className="flex flex-col justify-center p-6 text-center rounded-sm lg:max-w-md xl:max-w-lg lg:text-left">
              <h1 className="text-5xl font-bold leading-none sm:text-6xl">
                Wecome to Old
                <span className="text-violet-400">Bag</span>Shop
              </h1>
              <p className="mt-6 mb-8 text-lg sm:mb-12">
                You can find any kind of bag.
                <br className="hidden md:inline lg:hidden" />
                A bag is a common
                tool in the form of a non-rigid container. The use of bags
                predates. Cheap disposable paper bags and plastic shopping
                bags are very common.
              </p>
              <div className="flex flex-col space-y-4 sm:items-center sm:justify-center sm:flex-row sm:space-y-0 sm:space-x-4 lg:justify-start">
                <Link
                  to="/catorgory"
                  className="px-8 py-3 text-lg font-semibold rounded bg-violet-800 text-gray-100"
                >
                  Product
                </Link>
              </div>
            </div>
          </div>
        </section>
      </div>
    );
};

export default Home;