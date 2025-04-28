"use client";

import { useState } from "react";
import { useAuth } from "../auth/AuthContext";
import React from "react";

const LoginForm = () => {
  const { login } = useAuth();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errorMessage, setErrorMessage] = useState(null);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsLoading(true);
    setErrorMessage(null);

    // Simple validation
    if (!email || !password) {
      setErrorMessage("Email and password are required");
      setIsLoading(false);
      return;
    }

    try {
      await login(email, password); // Assuming login is an async function
      setIsLoading(false);
    } catch (error) {
      setErrorMessage("Invalid credentials, please try again");
      setIsLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex flex-col gap-4 max-w-sm mx-auto mt-20">
      <input
        type="email"
        placeholder="Email"
        className="border p-2 rounded"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
        required
      />
      <input
        type="password"
        placeholder="Password"
        className="border p-2 rounded"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        required
      />
      {errorMessage && <div className="text-red-500 text-sm">{errorMessage}</div>}
      <button
        type="submit"
        className="bg-blue-500 text-white p-2 rounded hover:bg-blue-600 disabled:bg-blue-300"
        disabled={isLoading}
      >
        {isLoading ? "Logging in..." : "Login"}
      </button>
    </form>
  );
};

export default LoginForm;
