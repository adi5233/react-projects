import React, { useEffect, useState, useRef } from "react";
let count = 0;

const InfiniteScroll = () => {
  const [page, setPage] = useState(1);
  const [products, setProducts] = useState([]);
  const [loading, setLoading] = useState(false);
  const observe = useRef(null);

  const fetchUser = async () => {
    if (loading) return;
    setLoading(true);
    console.log("fetching again", count++);
    const data = await fetch(
      `https://dummyjson.com/products?limit=${page * 10}&select=title,price`
    );
    const res = await data.json();
    setProducts((prevProducts) => [...prevProducts, ...res.products]);
    setLoading(false);
  };

  const getRefForLastElement = (node) => {
    if (loading) return;
    if (observe.current) observe.current.disconnect();
    observe.current = new IntersectionObserver((entries) => {
      if (entries[0].isIntersecting) {
        setPage(page + 1);
      }
    });
    if (node) observe.current.observe(node);
  };

  useEffect(() => {
    fetchUser();
  }, [page]);

  return (
    <div className="w-96 mx-auto mt-20">
      {products.map((product, index) =>
        index === products.length - 1 ? (
          <div
            key={product.title}
            className="p-4 my-2 bg-pink-200"
            ref={getRefForLastElement}
          >
            {product.title}
          </div>
        ) : (
          <div key={product.title} className="p-8 my-2 bg-slate-100">
            {product.title}
          </div>
        )
      )}
    </div>
  );
};

export default InfiniteScroll;
