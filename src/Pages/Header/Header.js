import React, { useContext} from 'react';
import { Link } from 'react-router-dom';
import { toast } from 'react-toastify';
// import button from '../../components/button';
import { AuthContext } from '../../contexts/AuthProvider';

const Header = () => {
    //  const [isMenuOpen, setIsMenuOpen] = useState(false);

     const {user,logout} =useContext(AuthContext);

     const handlelogout = () =>{
      logout()
        .then(toast.dark("User logged out!"))
        .catch((error) => console.log(error));
     }


     const menuItems = (
       <React.Fragment>
         <li>
           <Link to="/">Home</Link>
         </li>
         <li>
           <Link
             to="/catorgory"
            
           >
             Catorgory
           </Link>
         </li>
         <li>
           <Link
             to="/faq"
           
           >
             Faq
           </Link>
         </li>
         <li>
           <Link
             to="/about"
             
           >
             About us
           </Link>
         </li>
         <li>
           <Link
             to="/blog"
          
           >
             Blog
           </Link>
         </li>
         <li>
           <Link
             to="/dashboard"
           >
             Dashboard
           </Link>
         </li>
         {user?.uid?(
           <>
             <li>
               <button
                 onClick={handlelogout}
                 className="px-8 py-3 font-semibold rounded bg-gray-900 text-gray-100"
               >
                 Sign Out
               </button>
             </li>
           </>
         ) : (
           <>
             <li>
               <Link
                 to="/login"
                 className="px-8 py-3 m-1 font-semibold rounded bg-gray-900 text-gray-100"
               >
                 Sign In
               </Link>
             </li>
             <li>
               <Link
                 to="/register"
                 className="px-8 py-3 m-1 font-semibold rounded bg-gray-900 text-gray-100"
               >
                 Sign Up
               </Link>
             </li>
           </>
         )}
       </React.Fragment>
     );

  

    return (
      <div className="navbar text-white bg-violet-800 flex justify-between">
        <div className="navbar-start">
          <div className="dropdown">
            <label tabIndex={0} className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />
              </svg>
            </label>
            <ul
              tabIndex={1}
              // htmlFor="my-drawer-2"
              className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 text-black"
            >
              {menuItems}
            </ul>
          </div>
          <Link to="/" className="btn btn-ghost normal-case text-xl">
            Old Bag Shop
          </Link>
        </div>
        <div className="navbar-center hidden lg:flex">
          <ul className="menu menu-horizontal p-0">{menuItems}</ul>
        </div>
        <label
          htmlFor="my-drawer-2"
          tabIndex={2}
          className="btn btn-ghost  lg:hidden"
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M4 6h16M4 12h8m-8 6h16"
            />
          </svg>
        </label>
      </div>
    );
};

export default Header;