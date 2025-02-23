import { Link } from "react-router-dom";
import "../App.css"; // Import external CSS

const NotFound = () => {
  return (
    <div className="notfound-container">
      <h1 className="error-code">404</h1>
      <h2 className="error-text">Oops! Page Not Found</h2>
      <p className="error-description">
        The page you're looking for doesn't exist or has been moved. Try going back to the homepage.
      </p>
      <Link to="/" className="home-button">
        Go Home
      </Link>
    </div>
  );
};

export default NotFound;
