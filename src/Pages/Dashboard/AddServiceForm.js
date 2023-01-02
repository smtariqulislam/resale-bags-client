import React,{ useContext, useEffect} from 'react';
import { useState } from 'react';

// import { getCatorgoryName } from '../../api/services';
import { AuthContext } from '../../contexts/AuthProvider';

const AddServiceForm = ({ handleSubmit }) => {

   const { user } = useContext(AuthContext);

   const [catorgory ,setCatorgory] = useState([]);

  //  useEffect(()=>{
  //   getCatorgoryName(user?.email).then(data=>{
  //     setCatorgory(data);
  //   console.log(data);
  //  },[catorgory])


  // getCatorgoryName(user?.email).then((data) => {
  //   // console.log(data);
  //   setCatorgory(data);
  // });

  // console.log(catorgory)



   useEffect(() => {
    fetch("https://server-site-psi.vercel.app/catorgory")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
        setCatorgory(data);
      });
  
   }, []);

  //  console.log(catorgory[0]);



 


  // const catorgory = ["School Bag","Ledies Bags","Beach Bag"];


  return (
    <div>
      <section className="p-6  text-gray-100">
        <form
          onSubmit={handleSubmit}
          className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-violet-800 ng-untouched ng-pristine ng-valid"
        >
          <h2 className="w-full text-3xl font-bold text-center leading-tight">
            Product Add
          </h2>
          <select
            required
            name="catorgory"
            className="select bg-black text-white select-bordered w-full"
          >
            <option disabled selected>
              Select Catorgory
            </option>
            {/* {catorgory.length} */}
            {catorgory.map((c,i) => (
              <option value={c.catorgory} key={i}>
                {c.catorgory}
              </option>
            ))}
          </select>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Product Name
            </label>
            <input
              id="ProductName"
              type="text"
              placeholder="Product Name"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="name" className="block mb-1 ml-1">
              Name
            </label>
            <input
              id="name"
              type="text"
              defaultValue={user?.displayName}
              disabled
              placeholder="Your name"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
            />
          </div>
          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Email
            </label>
            <input
              id="email"
              type="email"
              defaultValue={user?.email}
              disabled
              placeholder="Your email"
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          <div>
            <label htmlFor="email" className="block mb-1 ml-1">
              Location
            </label>
            <input
              id="location"
              type="location"
              placeholder="location"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          <div>
            <label htmlFor="price" className="block mb-1 ml-1">
              Price
            </label>
            <input
              id="price"
              type="price"
              placeholder="Price"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          <div>
            <label htmlFor="realprice" className="block mb-1 ml-1">
              Real Price
            </label>
            <input
              id="realprice"
              type="realprice"
              placeholder="Real Price"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>
          <div>
            <label htmlFor="productYearUse" className="block mb-1 ml-1">
              Use of Year Product
            </label>
            <input
              id="productYearUse"
              type="productYearUse"
              placeholder=" Use of Year Product"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          <div>
            <label className="block">
              <span className="mb-1">Description</span>
              <textarea
                id="description"
                type="description"
                placeholder="description"
                rows="3"
                className="block w-full rounded-md focus:ring focus:ring-opacity-75 focus:ring-violet-400 bg-gray-800"
              ></textarea>
            </label>
          </div>
          <div>
            <label htmlFor="slots" className="block mb-1 ml-1">
              Slots
            </label>
            <input
              id="slots"
              type="slots"
              placeholder="Slots Number"
              required=""
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:ring-violet-400 bg-gray-800"
              data-temp-mail-org="2"
            />
          </div>

          <div>
            <label htmlFor="image" className="block mb-2 text-sm">
              Product Image:
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
              Add Product
            </button>
          </div>
        </form>
      </section>
    </div>
  );
};

export default AddServiceForm;