import React from "react";
import nothing from "../../public/Home/Product/nothing.png";
import Image from "next/image";
import { FaStar, FaStarHalf } from "react-icons/fa";
import Product from "../Products/Product";
import ProductPage from "../Products/Products";

const ProductSection = () => {
  return (
    <div className="mx-auto container mt-10 flex flex-wrap gap-16 md:gap-0">
      <div className="w-full md:w-1/6 flex-row  ">
        <div className="bg-white px-5 pb-5 rounded-lg">
          <div className="text-center  relative">
            <div className="flex-row items-end justify-end w-32 h-16  rounded-b-3xl bg-orange-500 absolute right-0 top-0">
              <p className="text-white">Save</p>
              <h2 className="text-black text-lg font-bold">$20.00</h2>
            </div>
          </div>
          <div className="pt-24 relative">
            <p className="bg-red-500 w-36 ml-5 text-center absolute top-20 rounded-md text-white py-1">
              Special offer
            </p>
            <Image className="bg-white py-5 rounded-lg" src={nothing} alt="" />
            <p className="my-5 text-black">
              Game Console Controner + USB 3.0 cable
            </p>
            <h1 className="text-xl font-bold bg-red-400 py-2 rounded-xl text-white px-5 ">
              $ 79.00
            </h1>
            <div className="mt-5">
              <progress
                className="progress progress-warning w-56 h-3 border-2"
                value="70"
                max="100"
              ></progress>
              <p className="text-sm flex justify-between text-black">
                <span>Already Sold : 70</span> <span>Available : 28</span>
              </p>
            </div>
          </div>
        </div>

        {/* Hurry Up! Offer Ends In : */}

        <div className="bg-white mt-2 py-5 px-5 rounded-lg">
          <p className="text-center text-lg font-bold py-5">
            Hurry Up! Offer Ends In :
          </p>
          <div className="flex justify-between">
            <div>
              <h3 className="bg-blue-600 px-2 text-white text-center rounded-full text-lg">
                06
              </h3>
              <p className="text-xs">HOURS</p>
            </div>
            <p>:</p>
            <div>
              <h3 className="bg-blue-600 px-2 text-white text-center rounded-full text-lg">
                06
              </h3>
              <p className="text-xs">Min</p>
            </div>
            <p>:</p>
            <div>
              <h3 className="bg-blue-600 px-2 text-white text-center rounded-full text-lg">
                06
              </h3>
              <p className="text-xs">Sec</p>
            </div>
          </div>
        </div>

        {/* Recommended For You */}
        <div className="mt-3 py-5 px-2 bg-white rounded-lg">
          <h1 className="text-center text-xl font-bold py-5">
            Recommended For You
          </h1>
          <div className="divider"></div>
          <div className="flex items-center justify-between">
            <Image className="h-20 w-20" src={nothing} alt="" />
            <div>
              <h2>Gorgeous Granite Chai...</h2>
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
          <div className="flex items-center justify-between mt-3">
            <Image className="h-20 w-20" src={nothing} alt="" />
            <div>
              <h2>Gorgeous Granite Chai...</h2>
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
      </div>
      <div className="w-full md:w-5/6 px-5">
        <ProductPage></ProductPage>
      </div>
    </div>
  );
};

export default ProductSection;
