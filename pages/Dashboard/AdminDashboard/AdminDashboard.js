import React from "react";
import { FaList } from "react-icons/fa";
import SalesStatics from "./SalesStatics/SalesStatics";
import MostSellingCategory from "./MostSellingCategory/MostSellingCategory";
import Transactions from "./Transactions/Transactions";
import RecentOrders from "./RecentOrders/RecentOrders";

const AdminDashboard = () => {
  return (
    <div>
      <div>
        <h1 className="text-2xl md:text-4xl font-bold mb-3">Dashboard</h1>
        <p className="text-lg tracking-wide">Welcome to your dashboard</p>
      </div>
      <div className="flex flex-wrap gap-6 md:gap-12 mt-10">
        <div className="w-full md:w-1/5">
          <div className="flex justify-between items-center border-2 border-gray-300 p-5 bg-white">
            <div>
              <h1 className="text-xl font-bold">356</h1>
              <p>Orders Received</p>
            </div>
            <p className="text-2xl font-bold text-green-400">
              <FaList></FaList>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <div className="flex justify-between items-center border-2 border-gray-300 p-5 bg-white">
            <div>
              <h1 className="text-xl font-bold">356</h1>
              <p>Average Daily Sales</p>
            </div>
            <p className="text-2xl font-bold text-green-400">
              <FaList></FaList>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <div className="flex justify-between items-center border-2 border-gray-300 p-5 bg-white">
            <div>
              <h1 className="text-xl font-bold">356</h1>
              <p>New Customers This Month</p>
            </div>
            <p className="text-2xl font-bold text-green-400">
              <FaList></FaList>
            </p>
          </div>
        </div>
        <div className="w-full md:w-1/5">
          <div className="flex justify-between items-center border-2 border-gray-300 p-5 bg-white">
            <div>
              <h1 className="text-xl font-bold">356</h1>
              <p>Pending Orders</p>
            </div>
            <p className="text-2xl font-bold text-green-400">
              <FaList></FaList>
            </p>
          </div>
        </div>
      </div>
      <div>
        <div className="flex items-center gap-20">
            <SalesStatics />
            <MostSellingCategory />
        </div>
      </div>
      <div className="flex flex-wrap">
        <Transactions />
        <RecentOrders />
      </div>
    </div>
  );
};

export default AdminDashboard;
