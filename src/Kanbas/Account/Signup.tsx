import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import * as client from "./client"; 
import { useDispatch } from "react-redux";
import { setCurrentUser } from "./reducer"; 

export default function Signup() {
  const [user, setUser] = useState<{ username: string; password: string }>({ username: "", password: "" });
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const signup = async () => {
    try {
      const currentUser = await client.signup(user); 
      dispatch(setCurrentUser(currentUser)); 
      navigate("/Kanbas/Account/Profile");
    } catch (error: any) {
      alert(error.response?.data?.message || "An error occurred during sign-up");
      console.log("Signing up with:", user);
const currentUser = await client.signup(user);
console.log("Sign up response:", currentUser);

    }
  };

  return (
    <div className="wd-signup-screen container mt-5">
      <h1 className="text-center mb-4">Sign up</h1>
      <input
        value={user.username}
        onChange={(e) => setUser({ ...user, username: e.target.value })}
        className="form-control mb-3"
        placeholder="Username"
      />
      <input
        value={user.password}
        onChange={(e) => setUser({ ...user, password: e.target.value })}
        type="password"
        className="form-control mb-3"
        placeholder="Password"
      />
      <button onClick={signup} className="btn btn-primary w-100 mb-3">
        Sign up
      </button>
      <div className="text-center">
        Already have an account? <Link to="/Kanbas/Account/Signin">Sign in</Link>
      </div>
    </div>
  );
}
