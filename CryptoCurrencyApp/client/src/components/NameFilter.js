import { Button, Input } from "antd";
import React, { useRef } from "react";
import { SearchOutlined } from "@ant-design/icons";
import { useDispatch } from "react-redux";
import { setFiltered } from "../redux/crypto/cryptoSlice";

function NameFilter() {
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setFiltered({ name: inputRef.current.input.value }));
  };

  const inputRef = useRef();

  return (
    <div className="name-filter">
      <Input
        placeholder="enter currency name to filter"
        ref={inputRef}
        allowClear
        size="large"
      />
      <Button type="primary" onClick={handleClick}>
        <SearchOutlined />
      </Button>
    </div>
  );
}

export default NameFilter;
