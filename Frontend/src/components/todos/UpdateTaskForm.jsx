import { Datepicker, TextInput } from "flowbite-react";
import React, { useState } from "react";
import styles from "../../styles/todos/updateTask.module.css";
import PrioritySelect from "../common/PrioritySelect";
import { updateTask } from "../../services/apiServices";
import { updateTaskInState } from "../../helpers/tasksHelper";

function UpdateTaskForm({ task, toggleModal, tasks, setTasks }) {
  const [formState, setFormState] = useState({
    task: task.task || "",
    dueDate: task.dueDate || "",
    priority: task.priority || "a",
    isCompleted: task.isCompleted || false,
  });

  function handleChange(e) {
    if (e instanceof Date) {
      setFormState({ ...formState, dueDate: e });
    } else {
      setFormState({ ...formState, [e.target.name]: e.target.value });
    }
  }

  async function handleSubmit(e) {
    e.preventDefault();
    const updatedTask = await updateTask({ ...formState, _id: task._id });
    updateTaskInState(updatedTask.data, tasks, setTasks);
    toggleModal();
  }

  return (
    <form className={styles.formContainer} onSubmit={handleSubmit}>
      <TextInput
        type="text"
        name="task"
        sizing="md"
        placeholder="Task"
        value={formState.task}
        className="[&>div>input]:rounded-full"
        onChange={handleChange}
      />
      <Datepicker
        value={new Date(formState.dueDate)}
        name="dueDate"
        onSelectedDateChanged={handleChange}
      />
      <PrioritySelect selected={formState.priority} onChange={handleChange} />
      <button
        className="text-blue-700 hover:text-white border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-full text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-blue-500 dark:text-blue-500 dark:hover:text-white dark:hover:bg-blue-500 dark:focus:ring-blue-800"
        type="submit"
      >
        Submit
      </button>
    </form>
  );
}

export default UpdateTaskForm;
