import React, { useEffect, useState } from "react";
import UserTableRow from "./UserTableRow";

const AllUsers = () => {
  const [isLoading, setLoading] = useState(true);
  const [allUser, setAllUser] = useState([]);
  useEffect(() => {
    const getAllUser = () => {
      fetch("/api/userAccountCreate")
        .then((res) => res.json())
        .then((data) => {
          setAllUser(data.data);
          setLoading(false);
        });
    };
    getAllUser();
  }, []);

  if (isLoading) {
    return <h1>Loading....</h1>;
  }
  return (
    <div className="overflow-x-auto w-2/3 mx-auto">
      <table className="table table-xs">
        <thead>
          <tr>
            <th></th>
            <th>Image</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone Number</th>
          </tr>
        </thead>
        <tbody>
          {allUser.map((item, index) => (
            <UserTableRow data={item} index={index}></UserTableRow>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default AllUsers;
