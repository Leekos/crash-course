import React from "react";

const tasks = [
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
];
const Tasks = () => {
  return (
    <>
      {tasks.map((task) => (
        <h3>{task.text}</h3>
      ))}
    </>
  );
};

export default Tasks;
