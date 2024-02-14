/* eslint-disable react/prop-types */

import Select from "./Select";
import { useSearchParams } from "react-router-dom";

function SortBy({ options }) {
  const [searchParams, setSearchParams] = useSearchParams();
  function handleChange(e) {
    searchParams.set("sortBy", e.target.value);
    setSearchParams(searchParams);
  }
  let value = searchParams.get("sortBy") || options[0].value;
  return (
    <Select
      options={options}
      onChange={handleChange}
      value={value}
      type="white"
    />
  );
}

export default SortBy;
