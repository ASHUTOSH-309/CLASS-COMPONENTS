import { useEffect, useState } from 'react';
import axios from 'axios';

// Custom hook for fetching todos
function useTodos(n) {
  const [todos, setTodos] = useState([]);
//Polling Logic Added After n seconds
  setTimeout(() => {
    useEffect(() => {
      // Fetching todos using Axios
      axios.get("https://sum-server.100xdevs.com/todos")
        .then(res => {
          setTodos(res.data.todos);
        })
    }, []);

  }, n * 1000)

  // Return the todos state
  return todos;
}

// Main App component
function App() {
  // Using the custom hook to fetch todos
  const todos = useTodos(5);

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