import React, { useState, useRef } from "react";
import { Button, Input, StyledForm } from "./styled";

const Form = ({ addNewTask }) => {
    const [newTaskContent, setNewTask] = useState("");
    const inputRef = useRef(null);

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            addNewTask(newTaskContent.trim());
        }
        setNewTask("");
        inputRef.current.focus();
    };

    return (
        <StyledForm onSubmit={onFormSubmit}>
            <Input
                ref={inputRef}
                value={newTaskContent}
                name="task" placeholder="Co jest do zrobienia?"
                onChange={(event) => setNewTask(event.target.value)}
                autoFocus
            />
            <Button>Dodaj zadanie</Button>
        </StyledForm>
    )
};

export default Form; 