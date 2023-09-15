import React, { useRef } from "react";
import { TodoTask } from "../types/task";

interface Props {
  tasks: TodoTask[]; // Define tasks as a prop
  onSubmit: (newTask: TodoTask) => void;
}

const TodoForm = ({ tasks, onSubmit }: Props) => {
  const taskInputRef = useRef<HTMLInputElement | null>(null);

  const handleFormSubmit = (event: React.FormEvent) => {
    event.preventDefault();
    const description = taskInputRef.current?.value;
    if (description) {
      const newTask: TodoTask = {
        id: Math.max(...tasks.map((task) => task.id), 0) + 1,
        description,
        isCompleted: false,
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
        Add Task
      </button>
    </form>
  );
};

export default TodoForm;
