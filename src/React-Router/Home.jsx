import React from "react";
import { Link, Outlet, useNavigate } from "react-router-dom";
import { Users } from "./Users";

export const Home = () => {
  const navigate = useNavigate();
  return (
    <>
      <div>Home page content</div>
      <button onClick={() => navigate("order_summary", { replace: true })}>
        Place order
      </button>
      <button onClick={() => navigate(-1)}>Go back</button>
    </>
  );
};
