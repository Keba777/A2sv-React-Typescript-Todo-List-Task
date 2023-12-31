import { useState } from "react";
import TodoForm from "./components/TodoForm";
import TodoList from "./components/TodoList";
import { TodoTask } from "./types/task";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import EditTodoForm from "./components/EditTodoForm";

function App() {
  const [tasks, setTasks] = useState([
    { id: 1, description: "Reading", isCompleted: false },
    { id: 2, description: "Coding", isCompleted: false },
    { id: 3, description: "Praying", isCompleted: true },
    { id: 4, description: "Walking", isCompleted: false },
    { id: 5, description: "Gardening", isCompleted: true },
    { id: 6, description: "Exercising", isCompleted: true },
    { id: 7, description: "Cooking", isCompleted: false },
    { id: 8, description: "Cleaning", isCompleted: true },
    { id: 9, description: "Learning", isCompleted: false },
    { id: 10, description: "Meeting", isCompleted: true },
  ]);

  const [taskToEdit, setTaskToEdit] = useState<TodoTask | null>(null);

  const handleSubmit = (newTask: TodoTask) => {
    setTasks([...tasks, newTask]);
  };

  const handleEdit = (id: number) => {
    const taskToEdit = tasks.find((task) => task.id === id);
    setTaskToEdit(taskToEdit || null);
  };

  const handleEditSubmit = (editedTask: TodoTask) => {
    const updatedTasks = tasks.map((task) =>
      task.id === editedTask.id ? editedTask : task
    );
    setTasks(updatedTasks);
    setTaskToEdit(null);
  };

  const handleComplete = (id: number) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, isCompleted: true } : task
    );
    setTasks(updatedTasks);
  };

  const handleDelete = (id: number) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/add"
          element={<TodoForm taskToEdit={null} onSubmit={handleSubmit} />}
        />
        <Route
          path="/edit/:id"
          element={<EditTodoForm tasks={tasks} onSubmit={handleEditSubmit} />}
        />
        <Route
          path="/"
          element={
            <TodoList
              todoTasks={tasks}
              onEdit={handleEdit}
              onComplete={handleComplete}
              onDelete={handleDelete}
            />
          }
        />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
