import React, { useState } from "react";
import { useAuth } from "./AuthUser";
import { useLocation, useNavigate } from "react-router-dom";
export const Login = () => {
  const [value, setValue] = useState();
  const location = useLocation();
  const redirectpath = location.state?.from || "/";
  const navigate = useNavigate();
  const auth = useAuth();
  console.log(auth);
  const handleClick = () => {
    auth.login(value);
    navigate(redirectpath, { replace: true });
  };
  return (
    <div>
      <input
        value={value}
        type="text"
        onChange={(e) => setValue(e.target.value)}
      ></input>
      <button onClick={handleClick}>Login</button>
    </div>
  );
};
