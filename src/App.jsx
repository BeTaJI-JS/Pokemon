import { Provider } from "react-redux";
import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

// import MainPage2 from "./components/MainPage2"; // переписываю
// import MainPage3 from "./components/MainPage3"; // переписываю
import MainPage4 from "./components/MainPage4"; // переписываю
import NestedPage from "./components/NestedPage";
import store from "./store";

const App =() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          {/* <Route element={<MainPage />} path="/pokemon" /> */}
          {/* <Route element={<MainPage2 />} path="/pokemon" />  */}
          {/* <Route element={<MainPage3 />} path="/pokemon" /> */}
          <Route element={<MainPage4 />} path="/pokemon" />
          <Route element={<NestedPage />} path="/pokemon/:id" />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
