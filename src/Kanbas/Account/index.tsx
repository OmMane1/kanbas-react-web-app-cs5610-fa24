import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import Navigation from "./Navigation";
import { useSelector } from "react-redux";



export default function Account() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);

  return (
    <div className="d-flex">
             
            <Navigation />
            <div className="wd-content p-3">
      <Routes>
      <Route path="/" element={<Navigate to={ currentUser ? "/Kanbas/Account/Profile" : "/Kanbas/Account/Signin" }/>}/>
      <Route path="/Signin"  element={<Signin />} />
      <Route path="/Profile" element={<Profile />} />
      <Route path="/Signup" element={<Signup />} />
      </Routes>
      
      </div>
    </div>
  );
}