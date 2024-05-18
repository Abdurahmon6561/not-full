import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
// import LoginPage from "./page/LoginPage";
// import HomePage from "./page/HomePage";
// import Layout from "./page/Layout";

const Client = React.lazy(() => import("./page/Client"));
const LoginPage = React.lazy(() => import("./page/LoginPage"));
const Admin = React.lazy(() => import("./page/Admin"));

const App = () => {
  return (
    <BrowserRouter>
      <React.Suspense fallback={<div>LOading...</div>}>
        <Routes>
          <Route path="/" element={<Client />} />
          <Route path="/admin" element={<Admin />} />
          <Route path="/login" element={<LoginPage />} />
        </Routes>
      </React.Suspense>
    </BrowserRouter>
  );
};

export default App;
