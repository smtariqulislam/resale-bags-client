import React, { useContext, useEffect, useState } from 'react';
import { AuthContext } from '../../contexts/AuthProvider';

const MyProduct = () => {

    const [users,setUsers]=useState([])

    const {user}=useContext(AuthContext);
    // const url = `http://localhost:4000/bookings?email=${user?.email}`;


     useEffect(() => {
       fetch(`http://localhost:4000/bookings?email=${user?.email}`)
         .then((res) => res.json())
         .then((data) => {
           // console.log(data);
           setUsers(data);
         });
     }, [user]);

    

    return (
      <div>
        <h3 className="text-3xl mb-5">My Order </h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Name</th>
                <th>Email</th>
                <th>Price</th>
                <th>ProductName</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id} className="hover">
                  <th>{i + 1}</th>
                  <td>{u.costomer}</td>
                  <td>{u.email}</td>
                  <td>{u.product}</td>
                  <td>price asbe pore</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default MyProduct;