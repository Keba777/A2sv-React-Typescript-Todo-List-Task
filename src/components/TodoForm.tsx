import React, { useRef, useEffect } from "react";
import { TodoTask } from "../types/task";

interface Props {
  taskToEdit: TodoTask | null;
  onSubmit: (task: TodoTask) => void;
}

const TodoForm = ({ taskToEdit, onSubmit }: Props) => {
  const taskInputRef = useRef<HTMLInputElement | null>(null);

  useEffect(() => {
    if (taskToEdit && taskInputRef.current) {
      taskInputRef.current.value = taskToEdit.description;
    }
  }, [taskToEdit]);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const description = taskInputRef.current?.value;
    if (description) {
      const newTask: TodoTask = {
        id: taskToEdit?.id || Math.floor(Math.random() * 1000), // Use existing ID or generate a new one
        description,
        isCompleted: taskToEdit ? taskToEdit.isCompleted : false,
      };
      onSubmit(newTask);
      taskInputRef.current!.value = "";
    }
  };

  return (
    <form className="mb-3" onSubmit={handleFormSubmit}>
      <div className="mb-1">
        <label htmlFor="task" className="form-label">
          Task
        </label>
        <input
          ref={taskInputRef}
          id="task"
          type="text"
          className="form-input"
        />
      </div>
      <button className="btn-submit" type="submit">
        {taskToEdit ? "Update Task" : "Add Task"}
      </button>
    </form>
  );
};

export default TodoForm;
