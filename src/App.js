import React, { useEffect, useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

function App() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState(localStorage.getItem("tasks") !== null ? JSON.parse(localStorage.getItem("tasks")) : []);

  const toggleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  const toggleDoneTask = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return task = { ...task, done: !task.done }
      }
      return task
    }))
  };
  const toggleDoneAll = () => {
    setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
  };
  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
      }])
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  });

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          removeTask={removeTask}
          toggleDoneTask={toggleDoneTask} />}
        extraHeaderContent={<Buttons
          tasks={tasks}
          hideDoneTasks={hideDoneTasks}
          toggleHideDone={toggleHideDone}
          toggleDoneAll={toggleDoneAll} />}
      />
    </Container>
  );
};

export default App;
