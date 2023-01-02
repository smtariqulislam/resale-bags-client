import React, { useContext } from 'react';

import { addProduct } from '../../api/bookings';
import { imageUpload } from '../../api/imageUpload';
import { AuthContext } from '../../contexts/AuthProvider';
import AddServiceForm from './AddServiceForm';

const AddCatogory = () => {
   const { user } = useContext(AuthContext);

  //  const data = useLoaderData();

  //  console.log(data)


   const handleSubmit = (event) => {
     event.preventDefault();
     //  const email = event.target.email.value;
      const catorgory = event.target.catorgory.value;
      const name = event.target.ProductName.value;
      const location = event.target.location.value;
     const price = event.target.price.value;
     const realprice = event.target.realprice.value;
     const useYear = event.target.productYearUse.value;
     const description = event.target.description.value;
     const slots = event.target.slots.value;
   

    

     // Image Upload
     const image = event.target.image.files[0];
     // Upload ID image
     imageUpload(image)
       .then((result) => {
         const sellerData = {
           sellName: user?.displayName,
           //  email: user?.email,
           location: location,
           img: result.data.display_url,
           price: price,
           description: description,
           oldprice: realprice,
           catorgory,
           name,
           useYear,
           slots,
         };
         // Send request do server
         //  console.log(sellerData);
         addProduct(sellerData)
           .then((data) => console.log(data))
           .catch((err) => console.log(err));
       })
       .catch((err) => console.log(err));
   };
  return (
    <div>
      <AddServiceForm handleSubmit={handleSubmit}></AddServiceForm>
    </div>
  );
};

export default AddCatogory;