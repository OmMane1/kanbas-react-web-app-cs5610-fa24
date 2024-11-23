import React, { useState, useEffect } from "react";

const WorkingWithArrays: React.FC = () => {
  const REMOTE_SERVER = process.env.REACT_APP_REMOTE_SERVER;

  const [todos, setTodos] = useState([]);
  const [selectedTodo, setSelectedTodo] = useState<any | null>(null);
  const [newDescription, setNewDescription] = useState("");
  const [newCompleted, setNewCompleted] = useState(false);

  const fetchTodos = async () => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/todos`);
    const data = await response.json();
    setTodos(data);
  };

  const updateDescription = async (id: number, description: string) => {
    const response = await fetch(
      `${REMOTE_SERVER}/lab5/todos/${id}/description/${encodeURIComponent(description)}`
    );
    if (response.ok) {
      fetchTodos();
    }
  };

  const updateCompleted = async (id: number, completed: boolean) => {
    const response = await fetch(`${REMOTE_SERVER}/lab5/todos/${id}/completed/${completed}`);
    if (response.ok) {
      fetchTodos();
    }
  };

  useEffect(() => {
    fetchTodos();
  }, [fetchTodos]);

  return (
    <div>
      <h3>Todo List</h3>
      <ul>
        {todos.map((todo: any) => (
          <li key={todo.id}>
            <strong>{todo.title}</strong>
            <p>{todo.description}</p>
            <p>Completed: {todo.completed ? "Yes" : "No"}</p>
            <button onClick={() => setSelectedTodo(todo)}>Edit</button>
          </li>
        ))}
      </ul>

      {selectedTodo && (
        <div>
          <h4>Edit Todo</h4>
          <p>Editing: {selectedTodo.title}</p>

          <label htmlFor="description">Description:</label>
          <input
            type="text"
            id="description"
            value={newDescription}
            onChange={(e) => setNewDescription(e.target.value)}
          />
          <button onClick={() => updateDescription(selectedTodo.id, newDescription)}>
            Update Description
          </button>

          <label htmlFor="completed">Completed:</label>
          <input
            type="checkbox"
            id="completed"
            checked={newCompleted}
            onChange={(e) => setNewCompleted(e.target.checked)}
          />
          <button onClick={() => updateCompleted(selectedTodo.id, newCompleted)}>
            Update Completed
          </button>
        </div>
      )}
    </div>
  );
};

export default WorkingWithArrays;
