import React, { useRef, useEffect } from "react";
import { TodoTask } from "../types/task";
import { useNavigate } from "react-router-dom";

interface Props {
  taskToEdit: TodoTask | null;
  onSubmit: (task: TodoTask) => void;
}

const TodoForm = ({ taskToEdit, onSubmit }: Props) => {
  const navigate = useNavigate();
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
      navigate("/");
    }
  };

  return (
    <div className=" p-6 min-w-full flex items-center justify-center mt-10">
      <form
        className="bg-slate-800 w-3/5 p-8 rounded-lg"
        onSubmit={handleFormSubmit}
      >
        <div className="mb-4">
          <label htmlFor="task" className="block text-lg text-white mb-1">
            Task
          </label>
          <input
            ref={taskInputRef}
            id="task"
            type="text"
            placeholder=" Reading Newspaper..."
            className="w-full rounded h-10 border bg-slate-200"
          />
        </div>
        <button
          className="cursor-pointer ms-48 w-2/5 bg-yellow-800 p-2 rounded text-xl text-white hover:bg-yellow-900"
          type="submit"
        >
          {taskToEdit ? "Update Task" : "Add Task"}
        </button>
      </form>
    </div>
  );
};

export default TodoForm;
