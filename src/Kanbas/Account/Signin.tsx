import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer";
import * as client from "./client"; 

export default function Signin() {
  const [credentials, setCredentials] = useState<{ username: string; password: string }>({ username: "", password: "" });
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const signin = async () => {
    try {
      const user = await client.signin(credentials);
      if (!user) return alert("Invalid username or password");
      dispatch(setCurrentUser(user)); 
      navigate("/Kanbas/Dashboard"); 
    } catch (error: any) {
      alert(error.response?.data?.message || "An error occurred during sign-in");
    }
  };

  return (
    <div id="wd-signin-screen" className="container mt-5">
      <h1 className="text-center mb-4">Sign in</h1>
      <input
        value={credentials.username}
        onChange={(e) => setCredentials({ ...credentials, username: e.target.value })}
        className="form-control mb-3"
        placeholder="Username"
      />
      <input
        value={credentials.password}
        onChange={(e) => setCredentials({ ...credentials, password: e.target.value })}
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <button onClick={signin} className="btn btn-primary w-100 mb-3">
        Sign in
      </button>
      <div className="text-center">
        Don't have an account? <Link to="/Kanbas/Account/Signup">Sign up</Link>
      </div>
    </div>
  );
}
