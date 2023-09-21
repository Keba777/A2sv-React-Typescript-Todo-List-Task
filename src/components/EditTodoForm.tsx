// EditTodoForm.tsx
import React from "react";
import TodoForm from "./TodoForm";
import { useNavigate, useParams } from "react-router-dom";
import { TodoTask } from "../types/task";

interface EditTodoFormProps {
  tasks: TodoTask[];
  onSubmit: (editedTask: TodoTask) => void;
}

const EditTodoForm: React.FC<EditTodoFormProps> = ({ tasks, onSubmit }) => {
  const { id } = useParams<{ id: string }>();
  const navigate = useNavigate();

  const taskToEdit = id
    ? tasks.find((task) => task.id === parseInt(id, 10))
    : null;

  const handleSubmit = (editedTask: TodoTask) => {
    onSubmit(editedTask);
    navigate("/todos");
  };

  return taskToEdit ? (
    <TodoForm taskToEdit={taskToEdit} onSubmit={handleSubmit} />
  ) : null;
};

export default EditTodoForm;
