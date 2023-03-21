import React, { useState, useEffect } from "react";

import ColorInput from "../components/ColorInput/ColorInput";
import NameInput from "../components/NameInput/NameInput";
import TaskList from "../components/TaskList/TaskList";

import styles from "../Pages/Main.module.css"

const Main = () => {
  const [showModal, setShowModal] = useState(false);
  const [tasks, setTasks] = useState([]);
  const [name, setName] = useState("");

  const handleDeleteTask = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
    localStorage.setItem("tasks", JSON.stringify(newTasks));
  };

  const handleNameSubmit = (name) => {
    localStorage.setItem("name", name);
    setName(name);
    setShowModal(false);
  };
  
  const handleCustomColorSubmit = (customColor) => {
    localStorage.setItem("customColor", customColor);
    document.body.style.backgroundColor = customColor;
  };

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem("tasks"));
    if (savedTasks) {
      setTasks(savedTasks);
    }
    const savedCustomColor = localStorage.getItem("customColor");
    if (savedCustomColor) {
      document.body.style.backgroundColor = savedCustomColor;
    }
  }, []);

  useEffect(() => {
    const savedName = localStorage.getItem("name");
    if (savedName) {
      setName(savedName);
    } else {
      setShowModal(true);
    }
  }, []);
  

  return (
    <>
      <nav className={styles.Nav}>
        <h1>TRABALHO DE DESENVOLVIMENTO WEB III</h1>
      </nav>
      <div className={styles.ContainerMain}>
        {showModal && <NameInput onSubmit={handleNameSubmit} />}
        <h3>Welcome, {name} !</h3>
        <div className={styles.CointainerInput}>
          <div className={styles.ColorInput}>
            <ColorInput onSubmit={handleCustomColorSubmit} />
          </div>
          <div className={styles.TaskList}>
            <TaskList tasks={tasks} onDelete={handleDeleteTask} />
          </div>
        </div>
      </div>
    </>
  );
};

export default Main;
