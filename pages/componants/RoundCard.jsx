import React from "react";
import cape from "../../public/Home/Banner/cape.png";
import clock from "../../public/Home/Banner/clock.png";
import cloth from "../../public/Home/Banner/cloth.png";
import phone from "../../public/Home/Banner/phone.png";
import Image from "next/image";

const RoundCard = () => {
  return (
    <div>
      <div className="row-span-1 col-span-4 bg-white rounded-lg order-3 mt-2 py-4">
        <div className="flex flex-wrap justify-between items-center px-5">
         
          <div>
            <Image
             className="mx-auto bg-gray-300 p-2 rounded-full"
              src={clock}
              alt=""
              height={"100"}
            />
            <p className="text-sm mt-3">Clock & Accessories</p>
          </div>

          <div >
            <Image
             className="mx-auto bg-gray-300 p-2 rounded-full"
              src={phone}
              alt=""
              height={"100"}
            />
            <p className="text-sm mt-3">Phone & Accessories</p>
          </div>
          <div>
            <Image
            className="mx-auto bg-gray-300 p-2 rounded-full"
              src={cloth}
              alt=""
              height={"100"}
            />
            <p className="text-sm mt-3">Cloth & Accessories</p>
          </div>
          <div className="  ">
            <Image
            className="mx-auto bg-gray-300 p-2 rounded-full"
             
              src={cape}
              alt=""
              height={'100'}
            />
            <p className="text-sm mt-3">Cape & Accessories</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default RoundCard;
