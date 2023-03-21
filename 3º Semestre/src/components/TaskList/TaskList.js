import React, { useState, useEffect } from 'react';

import styles from "../TaskList/TaskList.module.css"

function TaskList() {
  const [tasks, setTasks] = useState([]);

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks') || '[]');
    setTasks(storedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const handleDelete = (index) => {
    const newTasks = [...tasks];
    newTasks.splice(index, 1);
    setTasks(newTasks);
  };

  const addTask = () => {
    const taskInput = document.getElementById('task-input');
    const task = taskInput.value.trim();

    if (task) {
      setTasks([...tasks, task]);
      taskInput.value = '';
    }
  };

  return (
    <div>
      <input id="task-input" type="text" />
      <button onClick={addTask} className={styles.BtnAdd}>Add Task</button>
      <ul className={styles.TaskList}>
        {tasks.map((task, index) => (
          <li key={index}>
            {task}
            <button onClick={() => handleDelete(index)} className={styles.BtnDlt}>Delete</button>
          </li>
        ))}
      </ul>
    </div>
  );
}

export default TaskList;
