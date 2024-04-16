import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import MainPage from "./components/MainPage";
import NestedPage from "./components/NestedPage";
import store from "./store";

const App = () => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route element={<MainPage />} path="/pokemon" />
          <Route element={<NestedPage />} path="/pokemon/:id" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
};

export default App;
