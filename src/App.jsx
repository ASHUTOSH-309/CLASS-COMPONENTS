import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for fetching todos
function useTodos() {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    // Fetching todos using Axios
    axios.get("https://sum-server.100xdevs.com/todos")
      .then(res => {
        setTodos(res.data.todos);
      })
  }, []);

  // Return the todos state
  return todos;
}

// Main App component
function App() {
  // Using the custom hook to fetch todos
  const todos = useTodos();

  return (
    <>
      {/* Rendering Track component for each todo */}
      {todos.map(todo => <Track key={todo.id} todo={todo} />)}
    </>
  );
}

// Track component for rendering individual todo
function Track({ todo }) {
  return (
    <div>
      {todo.title}
      <br />
      {todo.description}
    </div>
  );
}

export default App;