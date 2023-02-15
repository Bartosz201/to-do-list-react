import { useState } from "react";

export const useTasks = () => {
    const [tasks, setTasks] = useState(JSON.parse(localStorage.getItem("tasks")) || []);

    const addNewTask = (content) => {
        setTasks(tasks => [
            ...tasks,
            {
                content,
                done: false,
                id: tasks.length === 0 ? 1 : tasks[tasks.length - 1].id + 1,
            }])
    };

    const removeTask = (id) => {
        setTasks(tasks => tasks.filter(task => task.id !== id));
    };

    const toggleDoneTask = (id) => {
        setTasks(tasks => tasks.map(task => task.id === id ? { ...task, done: !task.done } : task))
    };

    const toggleDoneAll = () => {
        setTasks(tasks => tasks.map(task => ({ ...task, done: true })));
    };

    return { tasks, addNewTask, removeTask, toggleDoneTask, toggleDoneAll };
};