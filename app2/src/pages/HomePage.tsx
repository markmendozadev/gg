import React from "react";
import { Link } from "react-router-dom";

function HomePage() {
  return (
    <div>
      <p>Contact Page Home!</p>
      <Link to="/dashboard/form">To Contact Form</Link>
      <Link to="/dashboard/view">To Contact View</Link>
    </div>
  );
}

export default HomePage;
