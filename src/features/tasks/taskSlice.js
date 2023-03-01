import { createSlice } from "@reduxjs/toolkit";
import { getTasksFromLocalStorage } from "./tasksLocalStorage";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: getTasksFromLocalStorage(),
        hideDone: false,
        downloadStatus: "active",
    },
    reducers: {
        addTasks: ({ tasks }, { payload: task }) => {
            tasks.push(task);
        },

        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },

        toggleTaskDone: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks[index].done = !tasks[index].done;
        },

        toggleDoneAll: ({ tasks }) => {
            tasks.forEach(task => {
                task.done = true
            })
        },

        removeTask: ({ tasks }, { payload: taskId }) => {
            const index = tasks.findIndex(task => task.id === taskId);
            tasks.splice(index, 1);
        },

        fetchExampleTasks: () => { },

        setTasks: (state, { payload: tasks }) => {
            state.tasks = tasks;
        },

        setDownloadStatus: (state, {payload: status}) => {
            state.downloadStatus = status;
        },
    },
});

const selectTasksState = state => state.tasks;

export const {
    addTasks,
    toggleHideDone,
    toggleTaskDone, toggleDoneAll,
    removeTask,
    fetchExampleTasks,
    setTasks,
    setDownloadStatus,
} = tasksSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectTasksAreEmpty = state => selectTasks(state).length === 0;
export const selectDownloadStatus = state => selectTasksState(state).downloadStatus
export default tasksSlice.reducer;