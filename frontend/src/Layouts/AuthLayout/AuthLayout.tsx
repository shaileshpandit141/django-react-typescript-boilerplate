import React from "react";
import "./AuthLayout.css";
import { Outlet } from "react-router-dom";

const AuthLayout: React.FC = (props) => {
  return (
    <div className="inner-grid-2-2 auth-alyout">
      <div className="form-wrapper">
        <Outlet />
      </div>
    </div>
  );
};

export default AuthLayout;
