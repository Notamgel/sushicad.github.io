// Libraries
import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Dashboard } from "../pages/dashboard";
import { Login } from "../pages/login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/companies/:companyId/dashboard" element={<Dashboard />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
