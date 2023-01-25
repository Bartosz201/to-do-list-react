import React, { useState } from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";




function App() {
  const [hideDoneTasks, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Zrobić zakupy", done: false },
    { id: 2, content: "Umyć okna", done: true },
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDoneTasks => !hideDoneTasks)
  }
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  }
  const toggleDoneTask = (id) =>{
    setTasks(tasks => tasks.map(task => {
      if(task.id === id){
        return task = {...task, done: !task.done}
      }
      return task
    }))
  }

  return (
    <Container>
      <Header />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />
      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} removeTask={removeTask} toggleDoneTask={toggleDoneTask} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
