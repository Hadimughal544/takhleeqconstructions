"use client";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

export default function RegisterPage() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const router = useRouter();

  async function HandleRegister(e) {
    e.preventDefault();

    try {
      const res = await fetch("http://127.0.0.1:4000/auth/register", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ email, password }),
      });

      if (!res.ok) {
        const error = await res.json();
        alert(error.message || "Registration failed");
        return;
      }

      alert("Admin registered successfully!");
      router.push("/admin/login"); // redirect to login page
    } catch (err) {
      console.error("Register error:", err);
      alert("Something went wrong. Please try again.");
    }
  }

  return (
    <div className="flex items-center justify-center min-h-screen bg-gradient-to-br from-gray-100 to-gray-300">
      <form
        onSubmit={HandleRegister}
        className="bg-white shadow-lg rounded-2xl p-8 w-full max-w-sm"
      >
        <h1 className="text-2xl font-bold text-gray-800 text-center mb-6">
          Register Admin
        </h1>

        {/* Email Input */}
        <div className="mb-4">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Email Address
          </label>
          <input
            type="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Enter your email"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
          />
        </div>

        {/* Password Input */}
        <div className="mb-6">
          <label className="block text-sm font-medium text-gray-700 mb-1">
            Password
          </label>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            placeholder="Enter your password"
            className="w-full px-4 py-2 border rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none text-gray-700"
          />
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-2 rounded-lg transition"
        >
          Register
        </button>
      </form>
    </div>
  );
}
