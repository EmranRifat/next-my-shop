import React from "react";

const RecentOrders = () => {
  return (
    <div className="mt-10 w-4/6 mx-auto p-8 bg-white">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">Recent Orders</h1>
        <button className="text-blue-400 underline border-none">
          View All
        </button>
      </div>
      {/* table part */}
      <div className="overflow-x-auto mt-10">
  <table className="table">
    {/* head */}
    <thead>
      <tr>
        <th>Item</th>
        <th>Product Id</th>
        <th>Price</th>
        <th>STATUS</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      {/* row 1 */}
      <tr>
       <th>Apple MacBook Pro 17"</th>
       <th>#XY-25G</th>
       <th>$2999.00</th>
       <th>Active</th>
       <th><button>View</button></th>
      </tr>
    </tbody>
  
    
  </table>
</div>
    </div>
  );
};

export default RecentOrders;
