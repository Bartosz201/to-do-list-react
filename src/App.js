import React, {useState} from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";

const tasks = [
  { id: 1, content: "Zrobić zakupy", done: false },
  { id: 2, content: "Umyć okna", done: true },
];


function App() {
  const [hideDoneTasks, setHideDone] = useState(false);

  const toggleHideDone = () =>{
    setHideDone(hideDoneTasks => !hideDoneTasks)
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
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} toggleHideDone={toggleHideDone} />}
      />
    </Container>
  );
}

export default App;
