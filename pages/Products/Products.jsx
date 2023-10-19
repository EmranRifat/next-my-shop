import dynamic from "next/dynamic";
import { useContext, useEffect, useState } from "react";
import { paginate } from "../Utilities/Pagination";
import PaginationControls from "../componants/PaginationControls";
import { AuthContext } from "../providers/AuthProvider";

const ProductPage = () => {
  const { data12, loading } = useContext(AuthContext);
  const pageSize = 12;
  const [currentPage, setCurrentPage] = useState(1);
  const [posts, setPosts] = useState([]);

  const DynamicProduct = dynamic(() => import("./Product"), {
    loading: () => <h1 className="text-center">Loading...</h1>,
    ssr: false,
  });

  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const paginatedPosts = paginate(posts, currentPage, pageSize);

  useEffect(() => {
    if (!loading) {
      setPosts(data12.data);
    }
  }, [loading]);

  return (
    <div>
      <div>
        {loading ? (
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
