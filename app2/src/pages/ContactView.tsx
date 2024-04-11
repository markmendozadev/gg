import { Link } from "react-router-dom";

function ContactView() {
  return (
    <div>
      <p>ContactView</p>
      <Link to="/dashboard/form">To Contact Form</Link>
    </div>
  );
}

export default ContactView;
