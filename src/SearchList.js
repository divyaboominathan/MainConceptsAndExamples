import React, { useState } from "react";

const SearchList = () => {
  const [filterList, setFilterList] = useState("");
  const list = [
    "Apple",
    "Orange",
    "JackFruit",
    "Gova",
    "kiwi",
    "Mango",
    "Blackberry"
  ];

  const handleSearch = (event) => {
    if (event.target.value === "") {
      setFilterList(list);
      return;
    }

    const filteredValues = list.filter(
      (item) =>
        item.toLowerCase().indexOf(event.target.value.toLowerCase()) !== -1
    );
    setFilterList(filteredValues);
  };
  return (
    <div>
      <div>
        Search: <input name="query" type="text" onChange={handleSearch} />
      </div>
      <div>
        {filterList &&
          filterList.map((item, index) => <div key={index}>{item}</div>)}
      </div>
    </div>
  );
};
export default SearchList;
