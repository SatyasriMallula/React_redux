import React from "react";
import { useParams } from "react-router-dom";

export const Admin = () => {
  const params = useParams();
  const admin = params.admin;
  return <div>Admin {admin} page</div>;
};
