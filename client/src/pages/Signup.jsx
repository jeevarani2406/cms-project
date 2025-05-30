import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

export default function Signup() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthForm
      onSubmit={(email, password) => {
        console.log("Email:", email);
        console.log("Password:", password);
        login(email); // You can use email as the user identifier
        navigate("/dashboard");
      }}
      title="Sign Up"
    />
  );
}
