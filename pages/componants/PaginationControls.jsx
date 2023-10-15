import React from "react";

const PaginationControls = ({ itemsCount, pageSize, currentPage, onPageChange }) => {
  const pageCount = Math.ceil(itemsCount / pageSize);
  
  if (pageCount <= 1) return null;
  
  return (
    <nav>
      <div className="join flex items-center justify-center mt-2">
        {Array.from({ length: pageCount }).map((_, index) => (
          <button
            key={index + 1}
            onClick={() => onPageChange(index + 1)}
            className={index + 1 === currentPage ? "join-item btn btn-active bg-blue-500 text-white" : "join-item btn"}
          >
            {index + 1}
          </button>
        ))}
      </div>
    </nav>
  );
};

export default PaginationControls;