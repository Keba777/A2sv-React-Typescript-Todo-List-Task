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
    <>
      <TodoForm
        taskToEdit={taskToEdit}
        onSubmit={taskToEdit ? handleEditSubmit : handleSubmit}
      />
      <TodoList
        todoTasks={tasks}
        onEdit={handleEdit}
        onComplete={handleComplete}
        onDelete={handleDelete}
      />
    </>
  );
}

export default App;
