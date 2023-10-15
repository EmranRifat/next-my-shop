import React from "react";
import SingleProduct from "./SingleProduct";

const MyOrder = () => {
  return (
    <div className="w-5/6 mx-auto shadow-xl bg-white p-10">
        <div className="mb-10">
            <h1 className="text-lg font-semibold">Total Processing Product: <span className="text-xl font-bold">500</span></h1>
        </div>
      <div className="overflow-x-auto">
        <table className="table">
          <thead>
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Quantity</th>
              <th>Order Date</th>
              <th>Product Information </th>
              <th>Review</th>
            </tr>
          </thead>
          <tbody>
            <SingleProduct />
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default MyOrder;
