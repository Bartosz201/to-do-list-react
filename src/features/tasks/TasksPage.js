import React from "react";
import Form from "./Form";
import TasksList from "./TasksList";
import Buttons from "./Buttons";
import Section from "../../common/Section";
import Header from "../../common/Header";
import Container from "../../common/Container";
import AddExampleTasksButton from "./AddExampleTaskButton";
import Search from "./Search";

function TasksPage() {

  return (
    <Container>
      <Header title={"Lista zadań"}/>
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
        extraHeaderContent={<AddExampleTasksButton/>}
      />
      <Section
        title="Wyszukiwarka"
        body={<Search />}
      />
      <Section
        title="Lista zadań"
        body={<TasksList
        />}
        extraHeaderContent={<Buttons />}
      />
    </Container>
  );
};

export default TasksPage;
