import Signin from "./Signin";
import Profile from "./Profile";
import Signup from "./Signup";
import { Routes, Route, Navigate } from "react-router";
import Navigation from "./Navigation";


export default function Account() {
  return (
    <div id="wd-account-screen">
             <table>
        <tr>
          <td valign="top">
            <Navigation />
          </td>
          <td valign="top">
      <h2>Account</h2>
      <Routes>
        <Route path="/" element={<Navigate to="/Kanbas/Account/Signin" />} />
        <Route path="/Signin" element={<Signin />} />
        <Route path="/Profile" element={<Profile />} />
        <Route path="/Signup" element={<Signup />} />
      </Routes>
      </td>
        </tr>
      </table>

    </div>
  );
}
