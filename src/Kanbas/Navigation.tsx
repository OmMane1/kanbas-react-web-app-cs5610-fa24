import { NavLink} from "react-router-dom";
import { AiOutlineDashboard } from "react-icons/ai";
import { IoCalendarOutline } from "react-icons/io5";
import { LiaBookSolid, LiaCogSolid } from "react-icons/lia";
import { FaInbox, FaRegCircleUser } from "react-icons/fa6";

export default function KanbasNavigation() {
    return (
        <div
            id="wd-kanbas-navigation"
            style={{ width: 110 }}
            className="list-group rounded-0 position-fixed bottom-0 top-0 d-none d-md-block bg-black z-2"
        >
            <a
                id="wd-neu-link"
                target="_blank"
                href="https://www.northeastern.edu/"
                className="list-group-item bg-black border-0 text-center"
            >
                <img src="/images/neulogo.png" width="75px" alt="NEU Logo" />
            </a>

            <NavLink
                to="/Kanbas/Account"
                id="wd-account-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <FaRegCircleUser className="fs-1 text-white" />  {/* White icon for Account */}
                Account
            </NavLink>

            <NavLink
                to="/Kanbas/Dashboard"
                id="wd-dashboard-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <AiOutlineDashboard className="fs-1 text-danger" />  {/* Red icon for Dashboard */}
                Dashboard
            </NavLink>

            <NavLink
                to="/Kanbas/Courses"
                id="wd-course-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <LiaBookSolid className="fs-1 text-danger" />  {/* Red icon for Courses */}
                Courses
            </NavLink>

            <NavLink
                to="/Kanbas/Calendar"
                id="wd-calendar-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <IoCalendarOutline className="fs-1 text-danger" />  {/* Red icon for Calendar */}
                Calendar
            </NavLink>

            <NavLink
                to="/Kanbas/Inbox"
                id="wd-inbox-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <FaInbox className="fs-1 text-danger" />  {/* Red icon for Inbox */}
                Inbox
            </NavLink>

            <NavLink
                to="/Kanbas/Labs"
                id="wd-labs-link"
                className={({ isActive }) =>
                    isActive
                        ? "list-group-item text-center border-0 bg-white text-danger"  // Active state
                        : "list-group-item text-center border-0 bg-black text-white" // Inactive state
                }
            >
                <LiaCogSolid style={{ fontSize: '3rem' }} className="text-danger" />  {/* Red icon for Labs */}
                Labs
            </NavLink>
        </div>
    );
}
