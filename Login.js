import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import "../App.css";

function Login() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault(); // Prevents default form refresh behavior

    if (email.trim() === "" || password.trim() === "") {
      alert("Please enter your Email and Password");
      return;
    }

    navigate("/dashboard");
  };

  return (
    <div style={styles.container}>
      <form onSubmit={handleLogin} style={styles.card}>
        <h2 style={styles.title}>Login</h2>

        <input
          type="email"
          placeholder="Enter Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          style={styles.input}
        />

        <input
          type="password"
          placeholder="Enter Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          style={styles.input}
        />

        <button type="submit" style={styles.button}>
          Login
        </button>
      </form>
    </div>
  );
}

// Styles to center the container and stack the form inputs vertically
const styles = {
  container: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    minHeight: "100vh",
    width: "100vw",
  },
  card: {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: "30px",
    borderRadius: "10px",
    backgroundColor: "rgba(255, 255, 255, 0.15)",
    backdropFilter: "blur(10px)",
    boxShadow: "0 8px 32px 0 rgba(0, 0, 0, 0.2)",
    width: "100%",
    maxWidth: "350px",
  },
  title: {
    marginBottom: "20px",
    color: "#ffffff",
  },
  input: {
    width: "100%",
    padding: "12px",
    margin: "8px 0",
    borderRadius: "6px",
    border: "1px solid #ccc",
    boxSizing: "border-box",
    fontSize: "14px",
  },
  button: {
    width: "100%",
    padding: "12px",
    marginTop: "16px",
    backgroundColor: "#1e3c72",
    color: "#fff",
    border: "none",
    borderRadius: "6px",
    fontSize: "16px",
    cursor: "pointer",
    fontWeight: "bold",
  },
};

export default Login;