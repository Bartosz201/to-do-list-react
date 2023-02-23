import React, { useEffect, useState } from "react";
import { useTasks } from "../../useTasks";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";

function Tasks() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const { tasks, addNewTask, removeTask, toggleDoneTask, toggleDoneAll } = useTasks();

  const toggleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks);
  };

  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList
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

export default Tasks;
