import React from "react";
import { Route, Routes } from "react-router-dom";

import AdminDashboard from "./AdminDashboard";
import AdminFooter from "./AdminFooter";
import AdminHeader from "./AdminHeader";
import AdminMenu from "./AdminMenu";
import AddMerchant from './SubMenu/AddMerchant';

const AdminHome = () => {
  return (
    <div class="wrapper">
      
        <AdminHeader></AdminHeader>
        <AdminMenu></AdminMenu>
        <AdminDashboard></AdminDashboard>
        <AdminFooter></AdminFooter>
        
        
      
    </div>
  );
};

export default AdminHome;
