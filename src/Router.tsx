import React, { Component } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

import { routerData } from "./datas/navs";

//component
import NotFound from "./views/notFound/NotFound";
import Header from "./components/header/Header";
import Navigation from "./components/navigation/Navigation";

const Router = () => {
  return (
    <BrowserRouter>
      <Header/>
      <Routes>
        {routerData.map((data : any) => (
          <Route
            key={data.path}
            path={data.path}
            element={data.element}
          ></Route>
        ))}
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Navigation/>
    </BrowserRouter>
  );
};

export default Router;
