import { Label, TextInput } from "flowbite-react";
import React from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../providers/AuthProvider";

function Register() {
  const { register } = useAuth();

  function handleSubmit(e) {
    e.preventDefault();

    if (e.target["password"].value !== e.target["confirmPassword"].value) {
      alert("Passwords did not match!");
      return;
    }

    const data = {};
    data.username = e.target["username"].value;
    data.email = e.target["email"].value;
    data.password = e.target["password"].value;

    register(data);
  }

  return (
    <div
      className="h-[calc(100vh-72px-80px)] flex items-center justify-center"
      onSubmit={handleSubmit}
    >
      <form className="bg-[#fff9c4] border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="username" value="Your name" />
            </div>
            <TextInput
              id="username"
              name="username"
              type="text"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="">
            <div className="mb-2 block">
              <Label htmlFor="email1" value="Your email" />
            </div>
            <TextInput
              id="email1"
              type="email"
              name="email"
              placeholder="...@gmail.com"
              required
            />
          </div>
        </div>
        <div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="password" value="Your password" />
            </div>
            <TextInput id="password" name="password" type="password" required />
          </div>
          <div>
            <div className="mb-2 block">
              <Label htmlFor="confirm-password" value="Confirm password" />
            </div>
            <TextInput
              id="confirm-password"
              name="confirmPassword"
              type="password"
              required
            />
          </div>
        </div>
        <button
          className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900"
          type="submit"
        >
          Submit
        </button>
        <p className="text-center">OR</p>
        <Link to="/login" className="text-center">
          Login
        </Link>
      </form>
    </div>
  );
}

export default Register;
