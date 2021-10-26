import "./error.css";
import { Link } from "react-router-dom";

const Error = () => {
  return (
    <div className="error">
      <h1>404 Page Not Found.</h1>
      <Link to="/" className="backHome">
        Back Home
      </Link>
    </div>
  );
};

export default Error;
