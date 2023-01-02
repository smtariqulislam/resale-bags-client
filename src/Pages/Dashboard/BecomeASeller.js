import React, { useContext, useEffect, useState } from 'react';
import { imageUpload } from '../../api/imageUpload';
import { getRole, sellerRequest } from '../../api/user';
import BecomeSellerFrom from '../../components/BecomeSellerFrom';
import { AuthContext } from '../../contexts/AuthProvider';

const BecomeASeller = () => {

     const { user } = useContext(AuthContext);
     const [role, setRole] = useState(null);

      useEffect(() => {
        // setLoading(true);
        getRole(user?.email).then((data) => {
            // console.log(data);
          setRole(data);
        //   setLoading(false);
        });
      }, [user]);

       const handleSubmit = (event) => {
         event.preventDefault();
        //  const email = event.target.email.value;
        //  const  = event.target.email.value;
         const location = event.target.location.value;

         // Image Upload
         const image = event.target.image.files[0];
         // Upload ID image
         imageUpload(image)
           .then((result) => {
             const sellerData = {
               email: user?.email,
               location: location,
               documentImg: result.data.display_url,
               role: "requested",
             };
             // Send request do server
            //  console.log(sellertData);
             sellerRequest(sellerData)
               .then((data) => console.log(data))
               .catch((err) => console.log(err));
            //    console.log()

             setRole("requested");
           })
           .catch((err) => console.log(err));
       };
          

    return (
      <>
        {role ? (
          <div className="h-screen text-gray-600 flex flex-col  justify-center text-center items-center pb-16 text-xl lg:text-3xl">
            Request Sent, wait for admin approval
          </div>
        ) : (
          <BecomeSellerFrom handleSubmit={handleSubmit}></BecomeSellerFrom>
        )}
      </>
    );
};

export default BecomeASeller;