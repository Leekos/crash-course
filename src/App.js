import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AddTask from "./components/AddTask";
import { useState } from "react";

const App = () => {
  const [showAddTask, setShowAddTask] = useState(false);

  const [tasks, setTasks] = useState([
    {
      id: 1,
      text: "Wizyta u Lekarza",
      day: "5 luty o 15:30",
      reminder: true,
    },

    {
      id: 2,
      text: "spotkanie na uczelni",
      day: "6 luty o 12:30",
      reminder: true,
    },

    {
      id: 3,
      text: "Zakupy",
      day: "5 luty o 14:30",
      reminder: false,
    },
  ]);

  //usuwanie zadań
  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  //ustawienie przypomnienia
  const toggleReminder = (id) => {
    setTasks(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //dodawanie zadań
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasks([...tasks, newTask]);
  };

  return (
    <div className="container">
      <Header
        onAdd={() => setShowAddTask(!showAddTask)}
        showAdd={showAddTask}
      />
      {showAddTask && <AddTask onAdd={addTask} />}
      {tasks.length > 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Task"
      )}
    </div>
  );
};

export default App;
