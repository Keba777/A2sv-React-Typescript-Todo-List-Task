import { TodoTask } from "../types/task";
import CompleteImage from "../assets/complete.png";
import DeleteImage from "../assets/delete.png";

interface Props {
  todoTasks: TodoTask[];
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todoTasks, onComplete, onDelete }: Props) => {
  const completedTasks = todoTasks.filter((task) => task.isCompleted);
  const uncompletedTasks = todoTasks.filter((task) => !task.isCompleted);

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
      <span></span>
    </>
  );
};

export default TodoList;
