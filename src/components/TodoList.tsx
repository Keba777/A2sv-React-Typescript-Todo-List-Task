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
      <h1 className="text-5xl font-bold flex  justify-center">My Tasks</h1>
      <div className=" p-6 min-w-full md:grid grid-cols-2 gap-4 ">
        <div className=" bg-slate-900 flex flex-col items-center justify-center pt-4 pb-8 rounded-lg mb-4">
          <h2 className="text-white text-3xl mb-3">Tasks</h2>
          {uncompletedTasks.map((task) => (
            <ul
              className=" bg-slate-600 text-white text-lg list-none w-4/5 rounded p-2 mb-4"
              key={task.id}
            >
              <li className="flex justify-between">
                <p>{task.description}</p>
                <div>
                  {/* edit button */}
                  <button
                    className="cursor-pointer p-1 hover:bg-slate-700 rounded-xl"
                    onClick={() => handleEditClick(task.id)} // Use handleEditClick to trigger routing
                  >
                    <img className="w-5" src={EditImage} alt="Edit Task" />
                  </button>
                  {/* complete button */}
                  <button
                    className="cursor-pointer p-1 hover:bg-slate-700 rounded-xl"
                    onClick={() => onComplete(task.id)}
                  >
                    <img
                      className="w-5"
                      src={CompleteImage}
                      alt="Task complete"
                    />
                  </button>
                  {/* delete button */}
                  <button
                    className="cursor-pointer p-1 hover:bg-slate-700 rounded-xl"
                    onClick={() => onDelete(task.id)}
                  >
                    <img
                      className="w-5"
                      src={DeleteImage}
                      alt="Task complete"
                    />
                  </button>
                </div>
              </li>
            </ul>
          ))}
        </div>
        <div className=" bg-orange-950 flex flex-col items-center justify-center pt-4 pb-8 rounded-lg mb-4">
          <h2 className="text-white text-3xl mb-3">Completed Tasks</h2>
          {completedTasks.map((task) => (
            <ul
              className=" bg-orange-800 text-white text-lg list-none w-4/5 rounded p-2 mb-4"
              key={task.id}
            >
              <li className="flex justify-between">
                <p>{task.description}</p>
                <div>
                  {/* edit button */}
                  <button
                    className="cursor-pointer p-1 hover:bg-orange-900 rounded-xl"
                    onClick={() => handleEditClick(task.id)} // Use handleEditClick to trigger routing
                  >
                    <img className="w-5" src={EditImage} alt="Edit Task" />
                  </button>
                  <button
                    className="cursor-pointer p-1 hover:bg-orange-900 rounded-xl"
                    onClick={() => onDelete(task.id)}
                  >
                    <img
                      className="w-5"
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
      <div className="flex justify-center ">
        <button className=" bg-sky-900 text-white text-xl cursor-pointer p-3 rounded w-1/3 hover:bg-sky-950 ">
          <Link to="/add">Add Tasks</Link>
        </button>
      </div>
    </>
  );
};

export default TodoList;
