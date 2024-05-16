import React from "react";
import Styles from "../../../Styles/Component/Pages/Todo/Todos.module.css";

function Todos() {
  return (
    <div className={Styles.Todoscontainer}>
      <input
        type="text"
        className={Styles.todostext}
        placeholder="Add your task..."
      />
      <input type="date" className={Styles.todosdate} />
      <button>+ Add Task</button>
    </div>
  );
}

export default Todos;
