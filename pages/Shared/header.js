import Link from 'next/link';
import React from 'react';

const Header = () => {
    return (
        <div>
             <div className=" py-1 hidden 		    lg:flex justify-center  font-semibold text-sm overflow-y-auto whitespace-nowrap scroll-hidden bg-gradient-to-r from-emerald-500 to-lime-500 mb-4 md:mb-0 text-white-500 space-x-12 ">
      <Link
        className="mx-4 leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        News
      </Link>
      <Link
        className="mx-4  leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-700 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Articles
      </Link>
      <Link
        className="mx-4  leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Official Shops
      </Link>
      <Link
        className="mx-4  leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Made in Bangladesh
      </Link>
      <Link
        className="mx-4 leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Trade Service{" "}
      </Link>
      <Link
        className="mx-4  leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Source on Xpart.com
      </Link>
      <Link
        className="mx-4  leading-5 text-gray-100 transition-colors duration-300 transform dark:text-gray-200 hover:text-blue-600 dark:hover:text-blue-400 hover:underline md:my-0"
        href="#"
      >
        Sell on Xpart
      </Link>
    </div>
        </div>
    );
};

export default Header;