import React, { useContext } from 'react';
import { AuthContext } from '../contexts/AuthProvider';

const BecomeSellerFrom = ({ handleSubmit }) => {

    const {user}= useContext(AuthContext);

  return (
    <section className="p-6  text-gray-100">
      <form
        onSubmit={handleSubmit}
        novalidate=""
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-violet-800 ng-untouched ng-pristine ng-valid"
      >
        <h2 className="w-full text-3xl font-bold text-center leading-tight">
          Seller Request For Admin
        </h2>
        <div>
          <label for="name" className="block mb-1 ml-1">
            Name
          </label>
          <input
            id="name"
            type="text"
            defaultValue={user?.displayName}
            disabled
            placeholder="Your name"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
          />
        </div>
        <div>
          <label for="email" className="block mb-1 ml-1">
            Email
          </label>
          <input
            id="email"
            type="email"
            defaultValue={user?.email}
            readOnly
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>

        <div>
          <label for="email" className="block mb-1 ml-1">
            Location
          </label>
          <input
            id="location"
            type="location"
            placeholder="Your email"
            required=""
            className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            data-temp-mail-org="2"
          />
        </div>

        <div>
          <label htmlFor="image" className="block mb-2 text-sm">
            NID:
          </label>
          <input
            type="file"
            id="image"
            name="image"
            accept="image/*"
            required
          />
        </div>
        <div>
          <button
            type="submit"
            className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 bg-violet-400 focus:ring-violet-400 hover:ring-violet-400 text-gray-100"
          >
            Request
          </button>
        </div>
      </form>
    </section>
  );
};

export default BecomeSellerFrom;