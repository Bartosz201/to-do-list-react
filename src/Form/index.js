import React, { useState } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTask] = useState("");

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
        }
        setNewTask("");
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                value={newTaskContent}
                name="task" placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTask(event.target.value)}
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form; 