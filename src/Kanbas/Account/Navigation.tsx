import { Link, useLocation } from "react-router-dom";
export default function Navigation() {
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `list-group-item ${location.pathname.includes(path) ? 'active' : 'text-danger'} border border-0`;
  };
  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      <Link to="/Kanbas/Account/Signin" id="wd-account-signin-link" className={getLinkClass("/Kanbas/Account/Signin")}>
        Signin
      </Link>
      <Link to="/Kanbas/Account/Signup" id="wd-account-signup-link" className={getLinkClass("/Kanbas/Account/Signup")}>
        Signup
      </Link>
      <Link to="/Kanbas/Account/Profile" id="wd-account-profile-link" className={getLinkClass("/Kanbas/Account/Profile")}>
        Profile
      </Link>
    </div>
  );
}