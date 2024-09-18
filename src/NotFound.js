import { Link } from "react-router-dom";

const NotFound = () => {
  return (
    <div className="not-found">
      <h2>Sorry</h2>
      <p>⚠This page does not exist</p>
      <Link to="/">Back to homepage</Link>
    </div>
  );
};

export default NotFound;
