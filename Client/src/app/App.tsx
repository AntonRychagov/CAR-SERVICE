import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import { Home } from "../pages/HomePage/ui/Home";
import { ServiceProvider } from "../pages/ServicesPage/ui/ServiceProvider";
import { Search } from "../pages/SearchPage/ui/Search";
import { UserAccount } from "../entities/UserAccount/ui/UserAccount";
import { RootStoreProvider } from "../shared/lib/store/RootStore";
import { Login } from "../pages/AuthPage/ui/Login";
import { Register } from "../pages/AuthPage/ui/Register";
import AuthLayout from "../layouts/AuthLayout";
import MainLayout from "../layouts/MainLayout";

const App: React.FC = () => {
  return (
    <RootStoreProvider>
      <Router>
        <Routes>
          <Route element={<AuthLayout />}>
            <Route path="/login" element={<Login />} />
            <Route path="/register" element={<Register />} />
          </Route>
          <Route element={<MainLayout />}>
            <Route path="/" element={<Home />} />
            <Route path="/service/:id" element={<ServiceProvider />} />
            <Route path="/search" element={<Search />} />
            <Route path="/account" element={<UserAccount />} />
          </Route>
        </Routes>
      </Router>
    </RootStoreProvider>
  );
};

export { App };
