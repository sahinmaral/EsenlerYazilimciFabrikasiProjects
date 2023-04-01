import { useEffect } from "react";
import "./App.css";
import axios from "axios";
import { useDispatch, useSelector } from "react-redux";
import {
  setCurrencies,
  setIsLoading,
  setMessage,
} from "./redux/crypto/cryptoSlice";
import Spinner from "./components/Spinner";
import CommonAlert from "./components/CommonAlert";
import Container from "./components/Container";
import { theme, ConfigProvider } from "antd";

const { defaultAlgorithm, darkAlgorithm } = theme;

function App() {
  const { isLoading, message, isDarkMode } = useSelector(
    (state) => state.crypto
  );
  const dispatch = useDispatch();

  useEffect(() => {
    axios
      .get("http://localhost:3005")
      .then((res) => {
        dispatch(setCurrencies(res.data.data));
      })
      .catch((err) => {
        dispatch(setMessage(err.message));
      })
      .finally(() => {
        dispatch(setIsLoading(false));
      });
    dispatch(setIsLoading(false));
  }, [dispatch]);

  return (
    <ConfigProvider
      theme={{
        algorithm: isDarkMode ? darkAlgorithm : defaultAlgorithm,
      }}
    >
      {isLoading && <Spinner />}
      {!isLoading && message && <CommonAlert type="error" message={message} className="api-alert" />}
      {!isLoading && !message && <Container />}
    </ConfigProvider>
  );
}

export default App;
