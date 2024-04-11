import * as React from "react";
import { Link } from "react-router-dom";

const NotFound: React.FC = () => {
  return (
    <div>
      <p>404</p>
      <div>
        <p>Page not found</p>
        <p>The page you requested could not be found.</p>
        <Link to="/">Go back to Home Page</Link>
      </div>
    </div>
  );
};

export default NotFound;
