import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import Input from "./Input";

function Search() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [search, setSearch] = useState();

  useEffect(() => {
    if (searchParam.get("search")) {
      setSearch(searchParam.get("search"));
    }
  }, []);
  function handleSearch(e) {
    setSearch(e.target.value);

    if (e.target.value === "") {
      searchParam.delete("search");
      setSearchParam(searchParam);
      return;
    }
    searchParam.set("search", e.target.value);
    setSearchParam(searchParam);
  }
  return (
    <div>
      <Input type="text" onChange={handleSearch} value={search} name="search" />
    </div>
  );
}

export default Search;
