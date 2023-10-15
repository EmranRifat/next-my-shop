import React from "react";
import img1 from "../../public/Home/Brand/asus.png";
import img2 from "../../public/Home/Brand/hp.png";
import img3 from "../../public/Home/Brand/Lenovo-Logo-2003.png";
import img4 from "../../public/Home/Brand/MI.png";
import img5 from "../../public/Home/Brand/samsung.png";
import img6 from "../../public/Home/Brand/walton.png";
import img7 from "../../public/Home/Brand/Sony-Logo.png";
import img8 from "../../public/Home/Brand/oneplus.png";
import Image from "next/image";

const Brand = () => {
  return (
    <div className="container mx-auto mt-20">
      <h1 className="text-xl font-bold text-gray-600">Top Brands</h1>
      <div className="divider"></div>
      <div className=" py-4 ">
        <div className="flex gap-16 h-20 w-36 item-center">
          <Image className="" src={img1} alt="brand" />
          <Image className="" src={img2} alt="brand" />
          <Image className="" src={img3} alt="brand" />
          <Image className="" src={img4} alt="brand" />
          <Image className="" src={img5} alt="brand" />
          <Image className="" src={img6} alt="brand" />
          <Image className="" src={img7} alt="brand" />
          <Image className="" src={img8} alt="brand" />
        </div>
      </div>
      <div className="divider"></div>
    </div>
  );
};

export default Brand;
