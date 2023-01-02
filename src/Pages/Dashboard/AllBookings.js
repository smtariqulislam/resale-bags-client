import React, { useContext, useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import { getAllBookings } from '../../api/bookings'


import TableRow from '../../components/TableRow'


import { AuthContext } from '../../contexts/AuthProvider'


const AllBookings = () => {
  const { user } = useContext(AuthContext)
  const [bookings, setBookings] = useState([])

  const fetchBookings = () =>
    getAllBookings(user?.email).then(data => {
      setBookings(data)
      console.log(data)

    })

  useEffect(() => {
    fetchBookings()
  },[user])

  console.log(bookings)
  return (
    <div className="mt-6 p-2">
      <h3 className="text-3xl mb-5">My Order </h3>
      <div className="overflow-x-auto">
        <table className="table w-full">
          <thead>
            <tr>
              <th></th>
              <th>Name</th>
              <th>Email</th>
              <th>Product-Name</th>
              <th>Price</th>
              <th>Process</th>
            </tr>
          </thead>
          <tbody>
            {bookings.map((u, i) => (
              <tr key={u._id}>
                <th>{i + 1}</th>
                <td>{u.costomer}</td>
                <td>{u.email}</td>
                <td>{u.product}</td>
                <td>${u.price}</td>
                <td className="p-1">
                  <Link
                    to={`/checkout/`}
                    className="btn bg-violet-800 text-gray-100 w-full"
                  >
                    Oder
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default AllBookings
