import React from "react";
import { BrowserRouter, Routes,Route } from "react-router";
import { Home } from "./component/Home";
import './assets/App.css';

export const App = () => {
  return (
   <React.Fragment>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </BrowserRouter>
    </React.Fragment>
  );
}
