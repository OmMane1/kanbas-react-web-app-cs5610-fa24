import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import Navigation from "./Navigation";


export default function Account() {
  return (
    <div id="wd-account-screen">
             
            <Navigation />
      <h2>Account</h2>
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      

    </div>
  );
}
