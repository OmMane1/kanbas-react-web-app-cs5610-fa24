import React from 'react';
import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { FaPencil } from "react-icons/fa6";
import { useSelector } from "react-redux";
import { RootState } from "../../store";

export default function ModuleControlButtons({
  moduleId,
  deleteModule,
  editModule,
}: {
  moduleId: string;
  deleteModule: (moduleId: string) => void;
  editModule: (moduleId: string) => void;
}) {
  const { currentUser } = useSelector((state: RootState) => state.accountReducer);

  const isAdminOrFaculty = currentUser.role === "FACULTY" || currentUser.role === "ADMIN";

  return (
    <div className="float-end">
      {/* Conditionally render the Edit and Delete buttons for faculty and admin */}
      {isAdminOrFaculty && (
        <>
          <FaPencil
            onClick={() => editModule(moduleId)}
            className="text-primary me-3"
            style={{ cursor: "pointer" }}
          />
          <FaTrash
            onClick={() => deleteModule(moduleId)}
            className="text-danger me-2 mb-1"
            style={{ cursor: "pointer" }}
          />
        </>
      )}
      <GreenCheckmark />
      <IoEllipsisVertical className="fs-4" />
    </div>
  );
}
