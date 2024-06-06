import { FileInput, Label, TextInput } from "flowbite-react";
import React, { useState } from "react";
import { toast } from "react-toastify";
import { useAuth } from "../providers/AuthProvider";
import { BASE_URL } from "../services/apiServices";

function Profile() {
  const { user, removeUser } = useAuth();
  console.log(user);

  const [formState, setFormState] = useState({
    username: user.username,
    password: "",
    confirmPassword: "",
    image: "",
  });

  function handleChange(e) {
    if (e.target.files && e.target.files[0]) {
      console.log(e.target.files[0]);
      setFormState({
        ...formState,
        image: e.target.files[0],
      });
    } else {
      setFormState({
        ...formState,
        [e.target.name]: e.target.value,
      });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const isPasswordSame = formState.password === formState.confirmPassword;
    if (!isPasswordSame) {
      toast("Passwords don't match!");
      return;
    }

    const formData = new FormData();

    formData.append("image", formState.image);
    formData.append("username", formState.username);
    formData.append("password", formState.password);

    fetch(`${BASE_URL}/users/${user.userId}`, {
      method: "PATCH",
      body: formData,
      headers: {
        Authorization: "Bearer " + localStorage.getItem("token"),
      },
    });

    removeUser();
  }

  return (
    <div className="p-8">
      <h2 className="mb-4 text-2xl font-bold">Profile</h2>
      <form
        className="bg-[#fff9c4] border-2 p-8 rounded-lg min-w-[300px] flex max-w-md flex-col gap-4"
        onSubmit={handleSubmit}
      >
        <div>
          <div className="mb-2 block">
            <Label htmlFor="file-upload" value="Upload file" />
          </div>
          <FileInput
            id="file-upload"
            name="image"
            accept="image/*"
            onChange={handleChange}
            filename={formState.image.name}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="username" value="Username" />
          </div>
          <TextInput
            id="username"
            type="text"
            name="username"
            placeholder=""
            required
            value={user.username}
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="password" value="New password" />
          </div>
          <TextInput
            id="password"
            type="password"
            name="password"
            onChange={handleChange}
          />
        </div>
        <div>
          <div className="mb-2 block">
            <Label htmlFor="confirmPassword" value="Confirm password" />
          </div>
          <TextInput
            id="confirmPassword"
            type="password"
            name="confirmPassword"
            onChange={handleChange}
          />
        </div>
        <button
          className="text-purple-700 hover:text-white border border-purple-700 hover:bg-purple-800 focus:ring-4 focus:outline-none focus:ring-purple-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-purple-400 dark:text-purple-400 dark:hover:text-white dark:hover:bg-purple-500 dark:focus:ring-purple-900"
          type="submit"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default Profile;
