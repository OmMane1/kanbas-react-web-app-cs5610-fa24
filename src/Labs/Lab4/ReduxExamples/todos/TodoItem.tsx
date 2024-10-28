import { useDispatch } from "react-redux";
import { deleteTodo, setTodo } from "./todosReducer";

interface Todo {
  id: number;
  title: string;
}

interface TodoItemProps {
  todo: Todo;
}

export default function TodoItem({ todo }: TodoItemProps) {
  const dispatch = useDispatch();

  return (
    <li className="list-group-item d-flex justify-content-between align-items-center">
      <span className="flex-grow-1">{todo.title}</span>
      <div>
        <button
          className="btn btn-primary mx-1"
          onClick={() => dispatch(setTodo(todo))}
          id="wd-set-todo-click"
        >
           Edit
        </button>
        <button
          className="btn btn-danger mx-1"
          onClick={() => dispatch(deleteTodo(todo.id))}
          id="wd-delete-todo-click"
        >
          Delete
        </button>
      </div>
    </li>
  );
}
