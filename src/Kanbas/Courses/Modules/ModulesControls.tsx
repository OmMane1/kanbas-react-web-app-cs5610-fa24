import { FaPlus } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import GreenCheckmark from "./GreenCheckmark";
export default function ModulesControls() {
  return (
    <div id="wd-modules-controls" className="text-nowrap">
      <button id="wd-add-module-btn" className="btn btn-lg btn-danger me-1 float-end">
        <FaPlus className="position-relative me-2" style={{ bottom: "1px" }} />
        Module</button>
      <div className="dropdown d-inline me-1 float-end">
        <button id="wd-publish-all-btn" className="btn btn-lg btn-secondary dropdown-toggle"
          type="button" data-bs-toggle="dropdown">
          <GreenCheckmark />
          Publish All</button>
        <ul className="dropdown-menu">
        <li>
    <Link 
        id="wd-publish-all-modules-and-items-btn" 
        className="dropdown-item" 
        to="/publish-all" 
    >
        <GreenCheckmark />
        Publish all modules and items
    </Link>
</li>
<li>
    <Link 
        id="wd-publish-modules-only-button" 
        className="dropdown-item" 
        to="/publish-modules-only" >
        <GreenCheckmark />
        Publish modules only    </Link>
</li>
        
<li>
    <Link 
        id="wd-unpublish-modules-only-button" 
        className="dropdown-item" 
        to="/unpublish-modules-only" >
        <GreenCheckmark />
        Unpublish modules only    </Link>
</li>
<li>
    <Link 
        id="wd-unpublish-all-modules-button" 
        className="dropdown-item" 
        to="/unpublish-all-modules" >
        <GreenCheckmark />
        Unpublish all modules     </Link>
</li>
         
        </ul>
      </div>
      <button
        id="wd-view-progress"
        className="btn btn-lg btn-secondary me-1 float-end">
        View Progress
      </button>

      <button
        id="wd-collapse-all"
        className="btn btn-lg btn-secondary me-1 float-end">
        Collapse All
      </button>
    </div>
  );
}