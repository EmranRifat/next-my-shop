import React from "react";
import boxing from "../../public/Home/Equipment/boxing.png";
import Image from "next/image";

const Deal = () => {
  return (
    <div className="bg-white rounded-lg py-8 flex">
      <div className=" relative w-1/2">
        <p className="bg-red-600 text-white text-lg font-bold text-center w-52 mx-auto absolute -top-5 left-7 py-1 rounded-md">
          Deals of the week
        </p>
        <Image
          className="bg-gray-200 py-5 mx-5 md:w-56 w-36 "
          src={boxing}
          alt=""
        />
      </div>
      <div className="w-1/2 ">
        <h1 className="text-red-700 italic font-semibold  ">
          Hurry Up! Offer Ends In :
        </h1>
        <div className="flex space-x-4 mt-2">
          <div>
            <h3 className="bg-blue-700 text-white text-center rounded-full text-lg w-8 md:w-12">
              06
            </h3>
            <small className="text-xs text-gray-400">HOURS</small>
          </div>
          <p className="text-red-700 ">:</p>
          <div>
            <h3 className="bg-blue-700 text-white text-center rounded-full text-lg w-8 md:w-12">
              06
            </h3>
            <small className="text-xs text-gray-400">Min</small>
          </div>
          <p className="text-red-700 ">:</p>
          <div>
            <h3 className="bg-blue-700 text-white text-center rounded-full text-lg w-8 md:w-12">
              06
            </h3>
            <small className="text-xs text-gray-400">SEC</small>
          </div>
        </div>
        <div>
          <h1 className="text-lg font-semibold">
            Game Console Controner USB 3.0 cable
          </h1>
          <div className="flex">
            <h3 className="bg-blue-700 text-white text-center rounded-full my-2 text-lg py-2  px-5 font-bold">
              $79.00
            </h3>
          </div>
          <p className="text-gray-700">Available : Solid : 70</p>
        </div>
      </div>
    </div>
  );
};

export default Deal;
