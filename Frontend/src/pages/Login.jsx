import { Label, TextInput } from "flowbite-react";
import React from "react";
import { useAuth } from "../providers/AuthProvider";
import { Link } from "react-router-dom";

function Login() {
  const { login } = useAuth();
  function handleSubmit(e) {
    e.preventDefault();
    const data = {};
    data.email = e.target["email"].value;
    data.password = e.target["password"].value;
    login(data);
  }

  return (
    <div className="h-[calc(100vh-72px-80px)] flex items-center justify-center">
      <form
        className="bg-[#fff9c4] border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="email" value="Your email" />
          </div>
          <TextInput
            id="email"
            type="email"
            name="email"
            placeholder="...@gmail.com"
            required
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="Your password" />
          </div>
          <TextInput id="password" type="password" name="password" required />
        </div>
        <button
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          type="submit"
        >
          Submit
        </button>
        <p className="text-center">OR</p>
        <Link className="text-center" to="/register">
          Register
        </Link>
      </form>
    </div>
  );
}

export default Login;
