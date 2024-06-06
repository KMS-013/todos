import { TextInput } from "flowbite-react";
import React from "react";
import { addTaskToState } from "../../helpers/tasksHelper";
import { addTask } from "../../services/apiServices";
import styles from "../../styles/todos/addTask.module.css";
import PrioritySelect from "../common/PrioritySelect";

function AddTask({ tasks, setTasks }) {
  async function handleSubmit(e) {
    e.preventDefault();

    const task = e.target["task"].value;
    const dueDate = e.target["dueDate"].value;
    const priority = e.target["priority"].value;

    if (!task || task.length < 2 || !dueDate) {
      alert("Please fill out all fields");
      return;
    }

    const result = await addTask({
      task,
      dueDate: new Date(dueDate),
      priority,
    });

    addTaskToState(result.data, tasks, setTasks);

    setTimeout(() => {
      if (result.success === true) {
        alert("Added successfully!");
      }
    }, 100);
  }

  return (
    <form className={styles.addTaskContainer} onSubmit={handleSubmit}>
      <TextInput
        name="task"
        type="text"
        className="grow-[1] [&>div>input]:!rounded-full"
      />
      <TextInput
        name="dueDate"
        type="date"
        className="[&>div>input]:!rounded-full"
      />
      <PrioritySelect className="shrink-0 [&>div>select]:!rounded-full" />
      <button
        className="text-yellow-400 hover:text-white border border-yellow-400 hover:bg-yellow-500 focus:ring-4 focus:outline-none focus:ring-yellow-300 font-medium text-sm px-5 py-2.5 text-center me-2 mb-2 dark:border-yellow-300 dark:text-yellow-300 dark:hover:text-white dark:hover:bg-yellow-400 dark:focus:ring-yellow-900 rounded-full"
        pill
        type="submit"
      >
        + AddTask
      </button>
    </form>
  );
}

export default AddTask;
