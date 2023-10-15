import { useState } from "react";
import Banner from "./Banner/banner";
import Navbar from "./Shared/navbar";
import Header from "./Shared/header";
import Equipment from "./Equipment/Equipment";
import Add from "./Add/add";
import Footer from "./Shared/Footer";
import Brand from "./componants/Brand";
import MostSell from "./componants/MostSell/MostSell";
import DashboardLayout from "@/pages/Layouts/DashboardLayout";
import ProductSection from "./componants/ProductSection";

const index = () => {
  return (
    <div className="bg-[#EDF2FD]">
      <Header />
      <Navbar />
      <Banner />
      <Equipment />
      <Add></Add>
      <ProductSection />
      <Brand />
      <MostSell />
      <Footer />
    </div>
  );
};

export default index;
