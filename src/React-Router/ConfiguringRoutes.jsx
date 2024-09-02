import React, { useEffect } from "react";
import { Link, NavLink, useNavigate } from "react-router-dom";
import { useAuth } from "./AuthUser";

export const ConfiguringRoutes = () => {
  const navigate = useNavigate();
  const auth = useAuth();

  // useEffect(() => {
  //   navigate("/");
  // }, []);
  return (
    <nav
      style={{
        backgroundColor: "black",
        color: "white",
        margin: "20px",
        padding: "30px",
      }}
    >
      <NavLink to="/" style={styles}>
        Home
      </NavLink>
      <NavLink to="about" style={styles}>
        About
      </NavLink>
      <NavLink to="products" style={styles}>
        Products
      </NavLink>
      <NavLink to="profile" style={styles}>
        profile
      </NavLink>
      {!auth.user && (
        <NavLink to="/login" style={styles}>
          Login
        </NavLink>
      )}
    </nav>
  );
};
const styles = {
  padding: "20px",
  margin: "20px",
  color: "white",
};
