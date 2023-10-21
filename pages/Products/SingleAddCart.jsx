import React from "react";

const SingleAddCart = ({ scart }) => {
  console.log(scart);
  return (
    <tr>
      <td>
        <div className="flex items-center space-x-3  ">
          <div className="avatar  ml-20">
            <div className="mask mask-squircle w-20 h-20">
              <img
                src={scart.thumbnail}
                alt="Avatar Tailwind CSS Component"
              />
            </div>
          </div>
          <div>
            <div className="font-semibold">{  scart.description.slice(0, 20)}</div>
            <div className="text-sm opacity-50">{scart.category}</div>
          </div>
        </div>
      </td>
      <td className="font-bold">
      {scart.title}
      </td>
      <td className="text-lg font-semibold">Price:  <span className="text-orange-600"> {scart.price}</span>$</td>
      <th>
        <button className="btn btn-accent btn-xs">Delete</button>
      </th>
    </tr>

    // <div className="container mx-auto  ">
    //   {/* row 1 */}
    //   <tr>
    //     <td>
    //       <div className="flex items-center space-x-3">
    //         <div className="avatar">
    //           <div className="mask mask-squircle w-20 h-20">
    //             <img
    //               src={scart.thumbnail}
    //               alt="Avatar Tailwind CSS Component"
    //             />
    //           </div>
    //         </div>
    //       </div>
    //     </td>
    //     <td>
    //       {scart.description.slice(0, 20)}
    //       <br />
    //       <span className="badge badge-ghost badge-sm">{scart.brand}</span>
    //     </td>
    //     <td>
    //       {" "}
    //       <div className=" text-start">
    //         <div className="font-bold ">{scart.title}</div>
    //         <div className="text-sm opacity-50">{scart.category}</div>
    //       </div>
    //     </td>
    //     <th>
    //       <p className="btn btn-ghost btn-xs ">
    //         Price:{" "}
    //         <span className="font-bold text-lg text-orange-500">
    //           {scart.price}$
    //         </span>
    //       </p>
    //     </th>
    //     <th></th>
    //     <th>
    //       <button className="btn btn-ghost btn-xs">{}</button>
    //     </th>
    //     <th>
    //       <button className="btn btn-accent btn-xs">Delete</button>
    //     </th>
    //   </tr>
    // </div>
  );
};

export default SingleAddCart;
