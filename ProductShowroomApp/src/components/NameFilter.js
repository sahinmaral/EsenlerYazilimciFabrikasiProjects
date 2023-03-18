import { Input } from "antd";
import React from "react";
import { useDispatch } from "react-redux";
import { setTitleToFilter } from "../redux/product/productSlice";

function NameFilter() {
  const dispatch = useDispatch();

  return (
    <div>
      <Input
        placeholder="Enter product name to filter"
        onChange={(e) => {
          dispatch(setTitleToFilter(e.target.value));
        }}
      />
    </div>
  );
}

export default NameFilter;
