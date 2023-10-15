import Link from "next/link";
import React, { useContext } from "react";
import { AuthContext } from "../providers/AuthProvider";

const Navbar = () => {
  const { user, logOut } = useContext(AuthContext);
  return (
    <div>
      <div className="navbar bg-base-100 border shadow-lg py-4">
        <div className="navbar-start">
          <div className="dropdown">
            <label
              tabIndex={0}
              htmlFor="my-drawer-2"
              className="btn btn-ghost lg:hidden "
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
          <Link
            href="/"
            className="flex title-font font-medium items-center text-transparent bg-clip-text bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0"
          >
            <span className="ml-3 text-3xl font-bold ">AmarShop</span>
          </Link>

          <div></div>
        </div>

        <div className="navbar-center  hidden lg:flex mr-24">
          <div className="relative flex ">
            <input
              type="search"
              className="relative m-0 -mr-0.5 h-16 flex-auto  rounded-s-full w-[35rem] border border-solid border-neutral-300 bg-transparent bg-clip-padding px-3 py-[0.25rem] text-base font-normal leading-[1.6] text-black outline-none transition duration-200 ease-in-out focus:z-[3] focus:border-primary focus:text-neutral-700 focus:shadow-[inset_0_0_0_1px_rgb(59,113,202)] focus:outline-none dark:border-neutral-600 dark:text-neutral-200 dark:placeholder:text-neutral-200 dark:focus:border-primary placeholder:text-xl"
              placeholder="Search by name and category etc .."
              aria-label="Search"
              aria-describedby="button-addon1"
            />

            <button
              className="relative btn-accent  h-16 rounded-e-full outline-none  bg-accent px-8  text-white shadow-md  "
              type="button"
              id="button-addon1"
              data-te-ripple-init
              data-te-ripple-color="light"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 20 20"
                fill="currentColor"
                className="h-8 w-8"
              >
                <path
                  fillRule="evenodd"
                  d="M9 3.5a5.5 5.5 0 100 11 5.5 5.5 0 000-11zM2 9a7 7 0 1112.452 4.391l3.328 3.329a.75.75 0 11-1.06 1.06l-3.329-3.328A7 7 0 012 9z"
                  clipRule="evenodd"
                />
              </svg>
            </button>
          </div>

          <ul className="menu  menu-horizontal px-1 text-lg ">
            <li>
              <Link href="/">About</Link>
            </li>
            <li>
              <Link href="/">Cart</Link>
            </li>
            <li>
              <Link href="/">Order</Link>
            </li>
            <li>
              <Link href={"/Dashboard"}>Dashboard</Link>
            </li>
            {user ? (
              ""
            ) : (
              <li>
                <Link href="/Login">Login</Link>
              </li>
            )}
            {user && (
              <li>
                <div className="avatar -mt-1 pr-5">
                  <div className="w-10 rounded-full">
                    <img src={user?.photoURL} />
                  </div>
                </div>
              </li>
            )}
            {user && (
              <li>
                <button
                  className="bg-blue-500 text-white hover:bg-blue-600 hover:text-white font-bold"
                  onClick={() => logOut()}
                >
                  Logout
                </button>
              </li>
            )}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
