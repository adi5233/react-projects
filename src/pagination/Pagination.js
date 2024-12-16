import React from "react";

const Pagination = ({ total, currentPage, setCurrentPage, productPerPage }) => {
  const handlePageChange = (page) => {
    setCurrentPage(page);
  };

  const getPagiantion = () => {
    let pageArray = [];

    for (let i = 1; i <= total / productPerPage; i++) {
      pageArray.push(
        <li
          onClick={() => handlePageChange(i)}
          className="mr-4 p-4 bg-pink-400 cursor-pointer"
        >
          {i}
        </li>
      );
    }

    return pageArray;
  };

  return (
    <div>
      <ul className="flex">{getPagiantion()}</ul>
    </div>
  );
};

export default Pagination;
