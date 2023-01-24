import React from "react";
import Form from "./Form";
import Tasks from "./Tasks";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Conteiner from "./Conteiner";

const tasks = [
  { id: 1, content: "Zrobić zakupy", done: false },
  { id: 2, content: "Umyć okna", done: true },
];

const hideDoneTasks = false;

function App() {
  return (
    <div>
      <Conteiner>
        <Header />
        <Section
          title="Dodaj nowe zadanie"
          body={<Form />}
        />
        <Section
          title="Lista zadań"
          body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
          extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        />
      </Conteiner>
    </div>
  );
}

export default App;
