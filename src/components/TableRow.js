import React from 'react';
import { Link } from 'react-router-dom';

const TableRow = ({booking,fetchBookings}) => {
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
            {booking.map((u, i) => (
              <tr key={u._id}>
                <th>{i + 1}</th>
                <td>{u.costomer}</td>
                <td>{u.email}</td>
                <td>{u.product}</td>
                <td>price asbe pore</td>
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
};

export default TableRow;