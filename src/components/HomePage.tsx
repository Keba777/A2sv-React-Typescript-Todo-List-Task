import { Link } from "react-router-dom";

const HomePage = () => {
  return (
    <div className="center">
      <h1>
        {" "}
        <table>Todo Lists</table>
      </h1>
      <div className=" mt-3">
        <button className="btn-link ">
          <Link to="/todos">Tasks</Link>
        </button>
      </div>
    </div>
  );
};

export default HomePage;
