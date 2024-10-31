import React, { useState } from "react";
import { useParams } from "react-router";
import { BsGripVertical } from "react-icons/bs";
import ModulesControls from "./ModulesControls";
import ModuleControlButtons from "./ModuleControlButtons";
import LessonControlButtons from "./LessonControlButtons";
import { addModule, editModule, updateModule, deleteModule } from "./reducer";
import { useSelector, useDispatch } from "react-redux";

interface Lesson {
  _id: string;
  name: string;
}

interface Module {
  _id: string;
  name: string;
  course: string;
  editing: boolean;
  lessons: Lesson[];
}

export default function Modules() {
  const { cid } = useParams();
  const [moduleName, setModuleName] = useState("");
  const { modules } = useSelector((state: any) => state.modulesReducer as { modules: Module[] });
  const dispatch = useDispatch();

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <ModulesControls
        moduleName={moduleName}
        setModuleName={setModuleName}
        addModule={() => {
          dispatch(addModule({ name: moduleName, course: cid }));
          setModuleName("");
        }}
      />
      <div style={{ flex: 1, display: "flex", justifyContent: "center", alignItems: "center", width: "100%", padding: "20px" }}>
      <ul id="wd-modules" className="list-group rounded-0" style={{ width: "100%", maxWidth: "100%", padding: "20px" }}>
          {modules
            .filter((module: Module) => module.course === cid)
            .map((module: Module) => (
              <li key={module._id} className="wd-module list-group-item p-0 mb-5 fs-5 border-gray">
                <div className="wd-title p-3 ps-2 bg-secondary d-flex align-items-center justify-content-between">
                  <div>
                    {!module.editing && (
                      <>
                        <BsGripVertical className="me-2 fs-3" />
                        {module.name}
                      </>
                    )}
                    {module.editing && (
                      <input
                        className="form-control w-50 d-inline-block"
                        onChange={(e) =>
                          dispatch(updateModule({ ...module, name: e.target.value }))
                        }
                        onKeyDown={(e) => {
                          if (e.key === "Enter") {
                            dispatch(updateModule({ ...module, editing: false }));
                          }
                        }}
                        defaultValue={module.name}
                      />
                    )}
                  </div>
                  <div className="d-flex align-items-center">
                    <ModuleControlButtons
                      moduleId={module._id}
                      deleteModule={() => dispatch(deleteModule(module._id))}
                      editModule={() => dispatch(editModule(module._id))}
                    />
                  </div>
                </div>
                {module.lessons && (
                  <ul className="wd-lessons list-group rounded-0">
                    {module.lessons.map((lesson: Lesson) => (
                      <li key={lesson._id} className="wd-lesson list-group-item p-3 ps-1 d-flex justify-content-between align-items-center">
                        <span>
                          <BsGripVertical className="me-2 fs-3" />
                          {lesson.name}
                        </span>
                        <LessonControlButtons />
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
