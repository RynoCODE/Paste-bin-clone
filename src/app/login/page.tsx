// app/login/page.tsx
import React from "react";

const Login: React.FC = () => {
  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-4xl font-bold">Log in</h1>
      <form className="flex flex-col space-y-4 mt-4">
        <input
          type="email"
          placeholder="Email"
          className="border p-2 rounded"
          required
        />
        <input
          type="password"
          placeholder="Password"
          className="border p-2 rounded"
          required
        />
        <button type="submit" className="bg-blue-500 text-white p-2 rounded">
          Log In
        </button>
      </form>
    </div>
  );
};

export default Login;
