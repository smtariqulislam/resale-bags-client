// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';


const AllUser = () => {

     const [users, setUsers] = useState([]);

    // const {data: users = {}}=useQuery({
    //     queryKey:['users'],
    //     queryFn: async()=>{
    //         const res = await fetch("http://localhost:4000/users")
    //         const data = await res.json();
    //         return data;

    //     }
    // })


     useEffect(() => {
       fetch("http://localhost:4000/users")
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           setUsers(data);
         });
     }, []);

     const handleMakeSeller= id =>{
        fetch(`http://localhost:4000/user/seller/${id}`,{ method:'PUT'
    })
    .then(res=>res.json())
        .then(data =>{
            console.log(data)

        })
     }



    return (
      <div>
        <h3 className="text-3xl mb-5">ALL Users</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Id</th>
                <th>Email</th>
                <th>Process</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <th>{i + 1}</th>
                  <td>{u._id}</td>
                  <td>{u.email}</td>
                  <td>
                    <button onClick={()=>handleMakeSeller(u._id)}
                    className="btn bg-violet-800 text-gray-100 w-full">
                      Now Seller
                    </button>
                    <br/> <br/>
                    <button className="btn bg-red-400 text-gray-100 w-full">
                      Delete
                    </button>
                  </td>
                 
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    );
};

export default AllUser;