import { FingerPrintIcon, UserPlusIcon } from '@heroicons/react/24/solid'
import React from 'react'
import { NavLink } from 'react-router-dom'

const UserMenu = () => {
  return (
    <>
      <NavLink
        to="/dashboard/order"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <FingerPrintIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">My Oder</span>
      </NavLink>

      <NavLink
        to="/dashboard/becomeaseller"
        className={({ isActive }) =>
          `flex items-center px-4 py-2 mt-5  transition-colors duration-300 transform  hover:bg-gray-300   hover:text-gray-700 ${
            isActive ? "bg-gray-300  text-gray-700" : "text-gray-600"
          }`
        }
      >
        <UserPlusIcon className="w-5 h-5" />

        <span className="mx-4 font-medium">Become A Seller</span>
      </NavLink>
    </>
  );
}

export default UserMenu
