import { Routes, Route, BrowserRouter } from "react-router-dom";
import "./App.css";

import { Provider } from "react-redux";
import store from "./store";
import MainPage from "./components/MainPage";
import NestedPage from "./components/NestedPage";

const App =() => {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MainPage />} />
          <Route path='/pokemon/:id' element={<NestedPage/>}/>
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
