import { Card, Checkbox } from "antd";
import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { setFilteredCategory } from "../redux/product/productSlice";

function CategoryFilter() {
  const categories = useSelector((state) => state.product.categories);

  const dispatch = useDispatch();

  const plainOptions = categories.map((category) => {
    return { label: category, value: category };
  });


  const onChange = (checkedValues) => {
    dispatch(setFilteredCategory(checkedValues));
  };

  return (
    <Card className="category-checkbox-group">
      <Checkbox.Group
        options={plainOptions}
        onChange={onChange}
      />
    </Card>
  );
}

export default CategoryFilter;
