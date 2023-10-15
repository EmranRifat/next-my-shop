import React from "react";

const SingleProduct = () => {
  return (
    <tr>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img
              src="/tailwind-css-component-profile-2@56w.png"
              alt="Avatar Tailwind CSS Component"
            />
          </div>
        </div>
      </td>
      <td>
        Product Name
      </td>
      <td>Product Price</td>
      <th>01</th>
      <th>
        Order Data -02/02/02
      </th>
      <th>Product Information ....</th>
      <th>Product Review</th>
    </tr>
  );
};

export default SingleProduct;
