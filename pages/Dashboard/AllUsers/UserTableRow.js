import React from "react";

const UserTableRow = ({ data, index }) => {
  const { _id, image, name, email, phoneNumber } = data;
  console.log(data);
  return (
    <tr>
      <th>{index}</th>
      <td>
        <div className="avatar">
          <div className="mask mask-squircle w-12 h-12">
            <img src={image} alt="Avatar Tailwind CSS Component" />
          </div>
        </div>
      </td>
      <td>{name}</td>
      <td>{email}</td>
      <td>{phoneNumber}</td>
    </tr>
  );
};

export default UserTableRow;
