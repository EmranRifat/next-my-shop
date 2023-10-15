import dynamic from "next/dynamic";
import { useEffect, useState } from "react";
import { paginate } from "../Utilities/Pagination";
import PaginationControls from "../componants/PaginationControls";

const ProductPage = () => {
  const DynamicProduct = dynamic(() => import("./Product"), {
    loading: () => <h1 className="text-center">Loading...</h1>,
    ssr: false,
  });

  const [isLoading, setLoading] = useState(true);
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  // const {data,isError,error}=useGetProductsQuery();
  // console.log(posts);

  useEffect(() => {
    fetch("http://localhost:5000/products")
      .then((res) => res.json())
      .then((data) => {
        setPosts(data);
        // setPosts(data.data);
        setLoading(false);
      });
  }, []);

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(posts, currentPage, pageSize);

  return (
    <div>
      <div>
        {isLoading ? (
          <div>Loading...</div>
        ) : (
          <div className="container mx-auto grid lg:grid-cols-4 md:grid-cols-2 gap-4 ">
            {paginatedPosts?.map((p) => (
              <DynamicProduct key={p._id} product={p}></DynamicProduct>
            ))}
          </div>
        )}
      </div>

      <PaginationControls
        itemsCount={posts?.length}
        pageSize={pageSize}
        currentPage={currentPage}
        onPageChange={handlePageChange}
      ></PaginationControls>
    </div>
  );
};
export default ProductPage;
