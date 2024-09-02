import React from "react";
import { useAuth } from "./AuthUser";
import { useNavigate } from "react-router-dom";

export const Profile = () => {
  const auth = useAuth();
  const navigate = useNavigate();

  const handleClick = () => {
    auth.logOut();
    navigate("/");
  };
  return (
    <div>
      welcome {auth.user}
      <button onClick={handleClick}>Log Out</button>
    </div>
  );
};
