import { useSelector, useDispatch } from "react-redux";
import { addTodo, updateTodo, setTodo } from "./todosReducer";

export default function TodoForm() {
  const { todo } = useSelector((state: any) => state.todosReducer);
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <input
        className="form-control flex-grow-1"
        placeholder="Enter todo title"
        value={todo.title}
        onChange={(e) => dispatch(setTodo({ ...todo, title: e.target.value }))}/>
     <div className="d-flex align-items-center">
  <button
    className="btn btn-success mx-1"
    onClick={() => dispatch(addTodo(todo))}
    id="wd-add-todo-click"
  >
    Add
  </button>
  <button
    className="btn btn-warning text-white mx-1"
    onClick={() => dispatch(updateTodo(todo))}
    id="wd-update-todo-click"
  >
    Update
  </button>
</div>
    </li>
  );
}
