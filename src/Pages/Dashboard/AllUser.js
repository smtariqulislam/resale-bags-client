// import { useQuery } from '@tanstack/react-query';
import React, { useEffect, useState } from 'react';
import { getAllUsers, makeSeller } from '../../api/user';
import SmallSpinner from '../../components/SmallSpinner';


const AllUser = () => {

     const [users, setUsers] = useState([]);

     const [loading, setLoading] = useState(false);



     useEffect(() => {
       fetch("https://server-site-psi.vercel.app/users")
         .then((res) => res.json())
         .then((data) => {
           console.log(data);
           setUsers(data);
         });
     }, []);

     const handleMakeSeller= id =>{
        fetch(`https://server-site-psi.vercel.app/user/seller/${id}`,{ method:'PUT'
    })
    .then(res=>res.json())
        .then(data =>{
            console.log(data)

        })
     }

      const handleRequest = (user) => {
        makeSeller(user).then((data) => {
          console.log(data);
          getUsers();
        });
      };
      const getUsers = () => {
        setLoading(true);
        getAllUsers().then((data) => {
          setUsers(data);
          setLoading(false);
        });
      };



    return (
      <div>
        <h3 className="text-3xl mb-5">ALL Users</h3>
        <div className="overflow-x-auto">
          <table className="table w-full">
            <thead>
              <tr>
                <th></th>
                <th>Role</th>
                <th>Email</th>
                <th>Process</th>
                {/* <th>Delete</th> */}
              </tr>
            </thead>
            <tbody>
              {users.map((u, i) => (
                <tr key={u._id}>
                  <th>{i + 1}</th>
                  <td>{u.role}</td>
                  <td>{u.email}</td>
                  <td>
                    <td className="px-5 py-5 border-b border-gray-200 bg-white text-sm">
                      {u?.role && u.role === "requested" && (
                        <span
                          onClick={() => handleRequest(u)}
                          className="relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight"
                        >
                          <span
                            aria-hidden="true"
                            className="absolute inset-0 bg-green-200 opacity-50 rounded-full"
                          ></span>
                          <span className="relative">
                            {loading ? <SmallSpinner /> : " Approve Request"}
                          </span>
                        </span>
                      )}
                    </td>
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