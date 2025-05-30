 import React from "react";
import { useNavigate } from "react-router-dom";
import { useAuth } from "../context/AuthContext";
import AuthForm from "../components/AuthForm";

export default function Login() {
  const { login } = useAuth();
  const navigate = useNavigate();

  return (
    <AuthForm
      onSubmit={(username) => {
        login(username);
        navigate("/dashboard");
      }}
      title="Login"
    />
  );
}