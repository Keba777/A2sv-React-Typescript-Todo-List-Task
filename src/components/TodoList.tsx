import { TodoTask } from "../types/task";
import EditImage from "../assets/edit.png";
import CompleteImage from "../assets/complete.png";
import DeleteImage from "../assets/delete.png";
import { Link, useNavigate } from "react-router-dom";

interface Props {
  todoTasks: TodoTask[];
  onEdit: (id: number) => void;
  onComplete: (id: number) => void;
  onDelete: (id: number) => void;
}

const TodoList = ({ todoTasks, onEdit, onComplete, onDelete }: Props) => {
  const completedTasks = todoTasks.filter((task) => task.isCompleted);
  const uncompletedTasks = todoTasks.filter((task) => !task.isCompleted);
  const navigate = useNavigate();

  const handleEditClick = (taskId: number) => {
    onEdit(taskId);
    navigate(`/edit/${taskId}`); // Navigate to the correct edit route
  };

  return (
    <>
      <div className="container mt-3">
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
                    onClick={() => handleEditClick(task.id)} // Use handleEditClick to trigger routing
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
                <div>
                  {/* edit button */}
                  <button
                    className="btn-edit"
                    onClick={() => handleEditClick(task.id)} // Use handleEditClick to trigger routing
                  >
                    <img className="icons" src={EditImage} alt="Edit Task" />
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
      </div>
      <div className="center mt-3">
        <button className="btn-link ">
          <Link to="/add">Add Tasks</Link>
        </button>
      </div>
    </>
  );
};

export default TodoList;
