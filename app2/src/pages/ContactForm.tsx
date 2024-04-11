import React from "react";
import { Link } from "react-router-dom";

function ContactForm() {
  return (
    <div>
      <p>ContactForm</p>
      <Link to="/dashboard/view">To Contact View</Link>
    </div>
  );
}

export default ContactForm;
