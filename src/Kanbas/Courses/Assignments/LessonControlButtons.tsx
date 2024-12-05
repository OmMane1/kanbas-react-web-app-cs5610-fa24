import { IoEllipsisVertical } from "react-icons/io5";
import GreenCheckmark from "./GreenCheckmark";
import { FaTrash } from "react-icons/fa";
import { useSelector } from 'react-redux';

export default function LessonControlButtons({ assignmentId, deleteAssignment, editAssignment }
  : { assignmentId: string; deleteAssignment: (assignmentId: string) => void; editAssignment: (assignmentId: string) => void }) 
{
    const { currentUser } = useSelector((state: any) => state.accountReducer);
    const isFaculty = currentUser?.role === "FACULTY"; 

    return (
      <div className="float-end">
        {isFaculty && ( 
          <>
            <FaTrash className="text-danger me-2 mb-1" onClick={() => deleteAssignment(assignmentId)} />
          </>
        )}
        <GreenCheckmark />
        <IoEllipsisVertical className="fs-4" />
      </div>
    );
}