import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import { useState } from "react";

const App = () => {
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
  return (
    <div className="container">
      <Header />

      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );
};

export default App;
