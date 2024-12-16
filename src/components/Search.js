import React, { useEffect, useState } from "react";

const Search = () => {
  const [searchText, setSearchText] = useState("");

  useEffect(() => {
    fetchData();
  });

  const fetchData = async () => {
    const res = await fetch(
      "https://dummyjson.com/products/search?q=" + searchText
    );
    const data = await res.json();
    // console.log(data);
  };

  return (
    <div className="flex">
      <input
        type="text"
        onChange={(e) => setSearchText(e.target.value)}
        className="border-gray-400  w-[34rem] border-2 outline-none rounded-l-full px-4"
      />
      <button className="border-gray-400 border-2 px-4 rounded-r-full bg-slate-200 ">
        search
      </button>
    </div>
  );
};

export default Search;
