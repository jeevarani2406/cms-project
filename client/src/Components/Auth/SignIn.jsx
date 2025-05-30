import React, { useState } from "react";
import { useAuth } from "../../context/AuthContext";
import { useNavigate } from "react-router-dom";
import "./Auth.css";

const SignIn = () => {
  const [email, setEmail] = useState("");
  const { signIn } = useAuth();
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    signIn(email);
    navigate("/dashboard");
  };

  return (
    <div className="form-container">
      <h2>Sign In</h2>
      <form onSubmit={handleSubmit}>
        <input type="email" placeholder="Email" value={email} onChange={(e) => setEmail(e.target.value)} required />
        <button type="submit">Sign In</button>
      </form>
    </div>
  );
};

export default SignIn;