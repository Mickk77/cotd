import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StorePicker from "./StorePicker";
import App from "./App";
import NotFound from "./NotFound";


const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route exact path="/" component={StorePicker} />
      <Route path="/store/:storeId" component={App} />
      <Route component={NotFound} />
    </Routes>
  </BrowserRouter>
);

export default Router;