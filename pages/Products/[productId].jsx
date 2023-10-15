import { Tab } from "@headlessui/react";
import React, { Fragment, useState } from "react";
import Review from "@/pages/Products/Review";
import RootLayout from "../Layouts/RootLayout";

const productDetails = ({ item }) => {
  const [counter, setCounter] = useState(0);

  const incrementCounter = () => {
    setCounter(counter + 1);
  };

  const decrementCounter = () => {
    if (counter !== 0) {
      setCounter(counter - 1);
    }
  };
  return (
    <div>
      <div className=" bg-[#EDF2FD]">
        <div className="md:flex justify-evenly  pt-10">
          <div className=" ">
            <img
              className="object-cover max-w-md border w-full h-auto  ml-32"
              src={item.images[0]}
              alt=""
            />
            <div className="md:flex gap-4">
              <img
                className="object-fill border-2 w-32 max-h-32  mt-4 ml-40"
                src={item.images[1]}
                alt=""
              />
              <img
                className="object-fill border-2 w-32 max-h-32  mt-4 "
                src={item.images[2]}
                alt=""
              />
            </div>
          </div>

          <div className="space-y-3 ">
            <p className="text-gray-500">Product id: {item.id}</p>
            <h2 className="text-3xl font-semibold">
              {item?.title.slice(0, 30)}
            </h2>
            <div className="flex">
              <p className="text-3xl font-semibold text-red-500 ">
                $ {item.price}{" "}
              </p>
              <p className="text-xl mt-1 px-6 line-through text-gray-600 ">
                {item.discountPercentage}
              </p>
            </div>
            <p>{item?.description.slice(0, 100)}</p>

            <div className="flex my-2 item-center ">
              <svg
                className="w-7 h-7 text-orange-500 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-7 h-7 text-orange-500 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-7 h-7 text-orange-400 fill-current dark:text-gray-300"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-7 h-7 text-orange-300 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>

              <svg
                className="w-7 h-7 text-orange-200 fill-current"
                viewBox="0 0 24 24"
              >
                <path d="M12 17.27L18.18 21L16.54 13.97L22 9.24L14.81 8.63L12 2L9.19 8.63L2 9.24L7.46 13.97L5.82 21L12 17.27Z" />
              </svg>
              <p className="text-gray-500 pl-4 text-lg">({item.rating})</p>
            </div>
            <div className="text-lg text-gray-600">
              <p><span className="text-gray-400">Brand :</span> {item.brand}</p>
              <p><span className="text-gray-400" >Category : </span>{item.category}</p>
            </div>

            <div className="divider"></div>
            <div className="flex">
              {/* counter  */}
              <div>
                <div className="btn-group pr-4 ">
                  <input
                    onClick={decrementCounter}
                    type="radio"
                    name="options"
                    data-title="-"
                    className="btn border border-slate-400  text-2xl "
                  />

                  <input
                    type="radio"
                    name="options"
                    data-title={counter}
                    className="btn border border-slate-400	 text-xl "
                  />

                  <input
                    onClick={incrementCounter}
                    type="radio"
                    name="options"
                    data-title="+"
                    className="btn  border border-slate-400	 text-2xl"
                  />
                </div>
              </div>

              <button className="btn text-white  btn-info mr-2">
                ADD TO CART
              </button>
              <button className="btn text-white btn-info">BUY NOW</button>
            </div>
          </div>
        </div>

        {/* description  */}

        <div className="ml-40 py-44  overflow-y-auto   mx-auto  ">
          <Tab.Group>
            <Tab.List>
              <div className="space-x-4 text-2xl font-semibold ">
                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? "text-blue-700 underline " : "text-gray-700"
                      }
                    >
                      DESCRIPTION
                    </button>
                  )}
                </Tab>

                <Tab as={Fragment}>
                  {({ selected }) => (
                    <button
                      className={
                        selected ? " text-blue-700 underline " : "text-gray-700"
                      }
                    >
                      REVIEWS (1)
                    </button>
                  )}
                </Tab>
              </div>
              <div className="divider"></div>
            </Tab.List>
            <Tab.Panels>
              <Tab.Panel>
                <div className="w-3/4 text-gray-600">
                  <p>
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                    Animi blanditiis, impedit doloribus, odit aut iste veniam
                    suscipit ratione maiores maxime voluptates consequuntur eius
                    perferendis in! Blanditiis, nesciunt quisquam explicabo
                    totam autem, magnam tempora nostrum ut voluptatum mollitia
                    fugit dignissimos esse nemo, odit odio! Nulla rerum ad,
                    repudiandae architecto temporibus excepturi. Vero dolore,
                    rem exercitationem laborum blanditiis sapiente ratione
                    assumenda qui! Dicta nemo architecto obcaecati ad quo ipsam
                    vel porro, error aspernatur quae, inventore ducimus id esse
                    quod beatae voluptates ab cumque omnis illum! Fugit aut
                    obcaecati illo labore culpa quod error neque sed nam, animi,
                    dolorem ullam eaque hic nemo?
                  </p>
                </div>
              </Tab.Panel>
              <Tab.Panel>
                <Review></Review>
              </Tab.Panel>
            </Tab.Panels>
          </Tab.Group>
        </div>
      </div>
    </div>
  );
};


export default productDetails;




export const getStaticPaths = async () => {
  const res = await fetch("http://localhost:5000/products");
  const items = await res.json();

  const paths = items.map((data) => ({
    params: { productId: data.id },
  }));
  return { paths, fallback: false };
};

export const getStaticProps = async (context) => {
  const { params } = context;
  const res = await fetch(`http://localhost:5000/products/${params.productId}`);
  const data = await res.json();
  console.log(data);
  return {
    props: {
      item: data,
    },
  };
};


// // for layout connect
// productDetails.getLayout = function getLayout(page) {
//   return (
//   <RootLayout>{ page }</RootLayout>
//   )
// };
