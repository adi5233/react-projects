import React, { useEffect, useState } from "react";
import Pagination from "./Pagination";

const Page = () => {
  const [currentPage, setCurrentPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    fetchData();
  }, [currentPage]);

  const fetchData = async () => {
    const url = `https://dummyjson.com/products?skip=${
      currentPage * 10
    }&limit=10`;
    const data = await fetch(url);
    const res = await data.json();
    setProducts(res.products);
    setTotal(res.total);
  };
  return (
    <div className="w-[500px] mx-auto mt-20">
      {products.map((product) => (
        <div key={product.id} className="my-4 bg-pink-300 p-5">
          {product.id} - {product.title}
        </div>
      ))}
      <Pagination
        total={total}
        productPerPage={10}
        currentPage={currentPage}
        setCurrentPage={setCurrentPage}
      />
    </div>
  );
};

export default Page;
