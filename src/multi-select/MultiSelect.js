import React, { useState, useEffect } from "react";

const MultiSelect = () => {
  const [query, setQuery] = useState("");
  const [suggestions, setSuggestions] = useState([]);
  const [selectedItems, setSelectedItems] = useState([]);
  const [selectedItemsMap, setSelectedItemsMap] = useState(new Set());

  const fetchData = async () => {
    if (query === "" || !query) return;
    const res = await fetch(
      "https://dummyjson.com/products/search?&select=title,price&q=" + query
    );
    const data = await res.json();
    setSuggestions(data.products);
  };

  const handleSelect = (item) => {
    setSelectedItems((previousItems) => [...previousItems, item]);
    setSelectedItemsMap(new Set([...selectedItemsMap, item.title]));
  };

  const handleRemove = (item) => {
    const newItems = selectedItems.filter(
      (sItem) => sItem.title !== item.title
    );
    setSelectedItems(newItems);
    const updatedItems = new Set(selectedItemsMap);
    updatedItems.delete(item.title);
    setSelectedItemsMap(updatedItems);
  };

  useEffect(() => {
    fetchData();
  }, [query]);

  return (
    <div className="w-[500px] mx-auto h-[700px]  mt-20">
      <div className="bg-gray-200  p-4 ">
        {selectedItems.map((s) => (
          <div
            className="rounded-full p-3 bg-red-300 m-4 w-64"
            onClick={() => handleRemove(s)}
          >
            {s.title} - X
          </div>
        ))}
        <input
          type="text"
          onChange={(e) => setQuery(e.target.value)}
          value={query}
          className=" w-full outline-none p-4"
          placeholder="search"
        />
      </div>
      {suggestions.map((s) =>
        !selectedItemsMap.has(s.title) ? (
          <div
            key={s.id}
            className="my-2 bg-slate-50"
            onClick={() => handleSelect(s)}
          >
            {s.title}
          </div>
        ) : null
      )}
    </div>
  );
};

export default MultiSelect;
