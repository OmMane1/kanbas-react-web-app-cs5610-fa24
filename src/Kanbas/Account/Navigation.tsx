import { Link, useLocation } from "react-router-dom";
import { useSelector } from "react-redux";

export default function Navigation() {
  const { currentUser } = useSelector((state: any) => state.accountReducer);
  const links = currentUser ? ["Profile"] : ["Signin", "Signup"];
  const location = useLocation();

  const getLinkClass = (path: string) => {
    return `list-group-item ${location.pathname.includes(path) ? 'active' : 'text-danger'} border border-0`;
  };

  return (
    <div id="wd-account-navigation" className="wd list-group fs-5 rounded-0">
      {links.map((link) => (
        <Link
          key={link}
          to={`/Kanbas/Account/${link}`}
          id={`wd-account-${link.toLowerCase()}-link`}
          className={getLinkClass(`/Kanbas/Account/${link}`)}
        >
          {link}
        </Link>
      ))}
    </div>
  );
}
