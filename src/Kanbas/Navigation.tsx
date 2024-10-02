import { Link, useLocation } from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
  const { pathname } = useLocation();

  const isActive = (path: string) => pathname.includes(path);
  const getLinkClass = (path: string) =>
    `list-group-item text-center border-0 d-flex flex-column align-items-center justify-content-center ${
      isActive(path) ? "bg-white text-danger" : "bg-black text-white"
    }`;
  const getIconClass = (path: string) =>
    `fs-1 ${
      path === "/Kanbas/Account"
        ? "text-white" 
        : isActive(path)
        ? "text-danger" 
        : "text-danger" 
    }`;

  return (
    <div
      id="wd-kanbas-navigation"
      style={{ width: 110 }}
      className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black">
      <a
        id="wd-neu-link"
        target="_blank"
        href="https://www.northeastern.edu/"
        className="list-group-item bg-black border-0 text-center d-flex justify-content-center">
        <img src="/images/neulogo.png" width="75px" alt="NEU Logo" />
      </a>
      <Link to="/Kanbas/Account" id="wd-account-link"className={getLinkClass("/Kanbas/Account")}>
        <FaRegCircleUser className={getIconClass("/Kanbas/Account")} />
        Account
      </Link>
      <Link to="/Kanbas/Dashboard" id="wd-dashboard-link"className={getLinkClass("/Kanbas/Dashboard")}>
        <AiOutlineDashboard className={getIconClass("/Kanbas/Dashboard")} />
        Dashboard
      </Link>
      <Link to="/Kanbas/Courses" id="wd-course-link" className={getLinkClass("/Kanbas/Courses")}>
        <LiaBookSolid className={getIconClass("/Kanbas/Courses")} />
       Courses
      </Link>
      <Link to="/Kanbas/Calendar" id="wd-calendar-link" className={getLinkClass("/Kanbas/Calendar")}>
        <IoCalendarOutline className={getIconClass("/Kanbas/Calendar")} />
        Calendar
      </Link>
      <Link to="/Kanbas/Inbox" id="wd-inbox-link"
        className={getLinkClass("/Kanbas/Inbox")}>
        <FaInbox className={getIconClass("/Kanbas/Inbox")} />
        Inbox
      </Link>
      <Link  to="/Kanbas/Labs"  id="wd-labs-link"  className={getLinkClass("/Kanbas/Labs")}>
        <LiaCogSolid className={getIconClass("/Kanbas/Labs")} />
        Labs
      </Link>
    </div>
  );
}
