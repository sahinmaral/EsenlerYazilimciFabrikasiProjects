import { Switch } from "antd";
import { Header } from "antd/es/layout/layout";
import React, { useCallback, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { Icon } from "@iconify/react";
import { setIsDarkMode } from "../redux/crypto/cryptoSlice";

function Navbar() {
  const { isDarkMode } = useSelector((state) => state.crypto);
  const dispatch = useDispatch();

  const handleThemeChange = useCallback(() => {

    if (isDarkMode) {
      document.body.classList.add("dark");
      document.body.classList.remove("light");
    } else {
      document.body.classList.add("light");
      document.body.classList.remove("dark");
    }

  }, [isDarkMode]);

  const handleChange = () => {
    dispatch(setIsDarkMode(!isDarkMode));
    handleThemeChange();
  };

  useEffect(() => {
    handleThemeChange();
  }, [handleThemeChange]);

  return (
    <Header className={`header ${isDarkMode ? "dark" : "light"}`}>
      <div className="theme-options">
        <Switch
          onChange={handleChange}
          defaultChecked={isDarkMode}
          checkedChildren={<Icon icon="emojione:crescent-moon" />}
          unCheckedChildren={<Icon icon="emojione:sun" />}
        />
      </div>
    </Header>
  );
}

export default Navbar;
