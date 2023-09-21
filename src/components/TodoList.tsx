import { TodoTask } from "../types/task";
import EditImage from "../assets/edit.png";
import CompleteImage from "../assets/complete.png";
import DeleteImage from "../assets/delete.png";
import { useState } from "react";

interface Props {
  todoTasks: TodoTask[];
  onEdit: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todoTasks, onEdit, onComplete, onDelete }: Props) => {
  const completedTasks = todoTasks.filter((task) => task.isCompleted);
  const uncompletedTasks = todoTasks.filter((task) => !task.isCompleted);
  const [taskToEdit, setTaskToEdit] = useState<TodoTask | null>(null);

  return (
    <>
      <div className="container">
        <div className="column container-uncompleted">
          <h2>Tasks</h2>
          {uncompletedTasks.map((task) => (
            <ul className="uncompleted mb-1" key={task.id}>
              <li>
                <p>{task.description}</p>
                <div>
                  {/* edit button */}
                  <button
                    className="btn-edit"
                    onClick={() => {
                      onEdit(task.id);
                      setTaskToEdit(
                        todoTasks.find((t) => t.id === task.id) || null
                      );
                    }}
                  >
                    <img className="icons" src={EditImage} alt="Edit Task" />
                  </button>
                  {/* complete button */}
                  <button
                    className="btn-complete"
                    onClick={() => onComplete(task.id)}
                  >
                    <img
                      className="icons"
                      src={CompleteImage}
                      alt="Task complete"
                    />
                  </button>
                  {/* delete button */}
                  <button
                    className="btn-delete"
                    onClick={() => onDelete(task.id)}
                  >
                    <img
                      className="icons"
                      src={DeleteImage}
                      alt="Task complete"
                    />
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
        <div className="column container-completed">
          <h2>Completed Tasks</h2>
          {completedTasks.map((task) => (
            <ul className="completed mb-1" key={task.id}>
              <li>
                <p>{task.description}</p>
                <button
                  className="btn-delete"
                  onClick={() => onDelete(task.id)}
                >
                  <img
                    className="icons"
                    src={DeleteImage}
                    alt="Task complete"
                  />
                </button>
              </li>
            </ul>
          ))}
        </div>
      </div>
    </>
  );
};

export default TodoList;
