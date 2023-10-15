import React from "react";

const Transactions = () => {
  return (
    <div className="mt-10 w-full md:w-1/4">
      <div className=" h-[600px] bg-white p-5">
      <div className="flex justify-between items-center ">
        <h1 className="text-xl font-bold">Transactions</h1>
        <button className="text-blue-400 underline border-none">
          View All
        </button>
      </div>
      {/* table part */}
      <div className="mt-10">
        <div className="overflow-x-auto">
          <table className="table">
            {/* head */}
            <thead>
              <tr>
                <th>
                Image
                </th>
                <th>Name</th>
                <th>Taka</th>
              </tr>
            </thead>
            <tbody>
              {/* row 1 */}
              <tr>
                <td>
                  <div className="flex items-center space-x-3">
                    <div className="avatar">
                      <div className="mask mask-squircle w-12 h-12">
                        <img
                          src="/tailwind-css-component-profile-2@56w.png"
                          alt="Avatar Tailwind CSS Component"
                        />
                      </div>
                    </div>
                  </div>
                </td>
                <td>
                  Zemlak, 
                </td>
                <td>500</td>
              </tr>
            </tbody>
          </table>
        </div>
      </div>
      </div>
    </div>
  );
};

export default Transactions;
