// Libraries
import { BrowserRouter, Routes, Route } from "react-router-dom";

// Pages
import { Dashboard } from "../pages/dashboard";
import { Register } from "../pages/register";
import { Login } from "../pages/login";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Login />} />
        <Route path="/dashboard" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;
