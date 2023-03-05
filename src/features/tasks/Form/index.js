import { nanoid } from "@reduxjs/toolkit";
import React, { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { Input } from "../Input/styled";
import { addTasks } from "../taskSlice";
import { Button, StyledForm } from "./styled";

const Form = () => {
    const [newTaskContent, setNewTask] = useState("");
    const inputRef = useRef(null);

    const dispatch = useDispatch();

    const onFormSubmit = (event) => {
        event.preventDefault();
        if (newTaskContent.trim() !== "") {
            dispatch(addTasks({
                content: newTaskContent.trim(),
                done: false,
                id: nanoid(),
            }));
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