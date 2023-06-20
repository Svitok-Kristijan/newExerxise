import React from "react";
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";
import {Provider} from "mobx-react";
//import store from "./utils/store";
import SignIn from "./components/auth/sign.in";
import Home from "./components/home/home";
import CarDetails from "./components/details/detail";

function App() {
  return (
    //<Provider store={store}>
    <Router>
      <Routes>
        <Route path="/" element={<SignIn />} />
        <Route path="/home" element={<Home />} />
        <Route path="/car/:id" element={<CarDetails />} />
      </Routes>
    </Router>
    // </Provider>
  );
}

export default App;
