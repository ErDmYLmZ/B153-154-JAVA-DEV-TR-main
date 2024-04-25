import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Students from "../components/sikayetvar-task/students/students";
import LoginPage from "../pages/user/login-page";

const CustomRoutes = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<LoginPage />} />
          <Route path="students" element={<Students />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default CustomRoutes;
