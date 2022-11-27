import { format } from 'date-fns';
import React, { useContext } from 'react';
import { Link } from 'react-router-dom';
import { AuthContext } from '../contexts/AuthProvider';

const BookingModal = ({ bookingProduct }) => {
  const { name, slots } = bookingProduct;
  const date = format(new Date(), "PP");

  const {user}= useContext(AuthContext);


   const handleBooking = (event) => {
     event.preventDefault();
     const form = event.target;
     const slot = form.slot.value;
     const name = form.name.value;
     const email = form.email.value;
     const phone = form.phone.value;
    
     const booking = {
       selectedDate: date,
       product: name,
       costomer: name,
       slot,
       email,
       phone,
     };

    //  console.log(booking);
   
   };
  return (
    <>
      <input type="checkbox" id="my-modal-3" className="modal-toggle" />
      <div className="modal">
        <div className="modal-box relative">
          <label
            htmlFor="my-modal-3"
            className="btn btn-sm btn-circle absolute right-2 top-2"
          >
            ✕
          </label>
          <h3 className="text-lg font-bold">{name}</h3>
          <form
            onSubmit={handleBooking}
            className="grid grid-cols-1 gap-3 mt-10"
          >
            <input
              type="text"
              disabled
              value={date}
              className="input w-full input-bordered "
            />
            <select name="slot" className="select select-bordered w-full">
              {slots.map((slot, i) => (
                <option value={slot} key={i}>
                  {slot}
                </option>
              ))}
            </select>
            <input
              name="name"
              type="text" defaultValue={user?.displayName} disabled
              placeholder="Your Name"
              className="input w-full input-bordered"
            />
            <input
              name="email"
              type="email" defaultValue={user?.email} disabled
              placeholder="Email Address"
              className="input w-full input-bordered"
            />
            <input
              name="phone"
              type="text"
              placeholder="Phone Number"
              className="input w-full input-bordered"
            />
            <br />
            <Link className="btn text-center bg-violet-800 text-gray-100 hover:bg-violet-500">
             Add Product
            </Link>
          </form>
        </div>
      </div>
    </>
  );
};

export default BookingModal;