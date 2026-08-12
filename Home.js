import { Link } from "react-router-dom";
import "../App.css";

function Home() {
  return (
    <>
      <nav className="navbar">
        <div className="logo">BlogHub</div>

        <div className="nav-links">
          <Link to="/login">
            <button>Login</button>
          </Link>

          <Link to="/register">
            <button>Register</button>
          </Link>
        </div>
      </nav>

      <div className="hero">
        <h1>Welcome to BlogHub</h1>

        <p>Read, Write and Share your Ideas with the World.</p>

        <Link to="/login">
          <button>Get Started</button>
        </Link>
      </div>
    </>
  );
}

export default Home;