import React, { useContext } from "react";
import RootLayout from "../Layouts/RootLayout";
import { AuthContext } from "../providers/AuthProvider";
import SingleAddCart from "./SingleAddCart";

const cart = () => {
  const {
    state: { cart, error, loading },
  } = useContext(AuthContext);
  // const scart=cart[0];
  // console.log(scart);

  let content;

  if (loading) {
    content = <p>Loading...</p>;
  }
  if (error) {
    content = <p>Something went wrong..!</p>;
  }
  if (!loading && !error && cart.length) {
    return <>
        <div className="overflow-x-auto min-h-max">
        <table className="table">
          {/* head */}
          <thead >
            <tr className=" ml-20">
              <th>Image</th>
              <th>Name</th>
              <th>Price</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {
              (content = cart.map((product) => (
                <SingleAddCart
                  key={product._id}
                  scart={product}
                ></SingleAddCart>
              )))
            }
          </tbody>
        </table>
      </div>
    </>
    
      
    
  }

  // return <div className="min-h-screen">{content}</div>;
};

export default cart;
// useCommonLayout
cart.getLayout = function getLayout(page) {
  return <RootLayout>{page}</RootLayout>;
};
