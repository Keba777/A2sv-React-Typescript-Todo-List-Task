import { useState } from "react";
import "./App.css";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoTask } from "./types/task";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Reading", isCompleted: false },
    { id: 2, description: "Coding", isCompleted: false },
    { id: 3, description: "Praying", isCompleted: true },
    { id: 4, description: "Walking", isCompleted: false },
    { id: 5, description: "Gardening", isCompleted: true },
  ]);

  const handleSubmit = (newTask: TodoTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) => {
      if (task.id === id) {
        return { ...task, isCompleted: true };
      }
      return task;
    });
    setTasks(updatedTasks);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <>
      <TodoForm tasks={tasks} onSubmit={handleSubmit} />
      <TodoList
        todoTasks={tasks}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
