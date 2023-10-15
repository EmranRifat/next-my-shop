import Image from "next/image";
import React from "react";
import { FaStar, FaStarHalf } from "react-icons/fa";
import doll from "../../public/Home/Equipment/doll.png";
import { FcBarChart } from "react-icons/fc";

const Arrival = () => {
  return (
    <div className="pl-5 mt-6 md:mt-0">
      <div className="bg-[#f9f9f9] py-6 px-5 text-xl font-bold flex">
        <FcBarChart className="text-2xl mt-1 mx-2 "></FcBarChart>
        <h1>Personal Protective Equipment</h1>
      </div>
      <div className="px-1  flex-wrap flex justify-between bg-white py-6 gap-1">
        <div className=" border-2 border-gray-200 px-1">
          <div className="bg-gray-300 px-5 py-2">
            <Image className="h-20 w-20" src={doll} alt="" />
          </div>
          <p className="my-2 font-semibold">Name </p>
          <div
            className="flex items-center gap-1 text-orange-400 my-2
          "
          >
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalf></FaStarHalf> <span>(4.5)</span>
          </div>
        </div>
        <div className="border-2 border-gray-200 px-1">
          <div className="bg-gray-300 px-5 py-2">
            <Image className="h-20 w-20" src={doll} alt="image" />
          </div>
          <p className="my-2 font-semibold">Name </p>
          <div
            className="flex items-center gap-1 text-orange-400 my-2
          "
          >
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalf></FaStarHalf> <span>(4.5)</span>
          </div>
        </div>
        <div className=" mt-5 md:mt-0 border-2 border-gray-200 px-2">
          <div className="bg-gray-300 px-5 py-1">
            <Image className="h-20 w-20" src={doll} alt="" />
          </div>
          <p className="my-2 font-semibold">Name </p>
          <div
            className="flex items-center gap-1 text-orange-400 my-2
          "
          >
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStar></FaStar>
            <FaStarHalf></FaStarHalf> <span>(4.5)</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Arrival;
