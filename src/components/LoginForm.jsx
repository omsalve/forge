// components/LoginForm.jsx
"use client";
import { useState } from "react";

export default function LoginForm({ onClose, onSuccess }) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simple hardcoded login
    if (username === "omsalve" && password === "9323003566") {
      onSuccess(); // You can redirect or show dashboard
    } else {
      alert("Wrong username or password, try again bro.");
    }
  };

  return (
    <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md shadow-lg w-full max-w-sm animate-fade-in">
      <h2 className="text-2xl font-bold mb-4 text-white">Log In</h2>
      <form onSubmit={handleSubmit} className="flex flex-col space-y-4">
        <input
          type="text"
          placeholder="Username"
          className="px-4 py-2 rounded-md bg-white bg-opacity-20 text-black placeholder-black"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />
        <input
          type="password"
          placeholder="Password"
          className="px-4 py-2 rounded-md bg-white bg-opacity-20 text-black placeholder-black"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
        <button
          type="submit"
          className="bg-[#5e2b2b] text-white py-2 px-6 rounded-md hover:bg-[#7e3f3f] transition"
        >
          Submit
        </button>
        <button
          type="button"
          onClick={onClose}
          className="text-sm text-white underline mt-2"
        >
          Cancel
        </button>
      </form>
    </div>
  );
}
