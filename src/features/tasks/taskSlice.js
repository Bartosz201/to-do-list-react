import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
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

    },
});

const selectTasksState = state => state.tasks;

export const { addTasks, toggleHideDone, toggleTaskDone, toggleDoneAll, removeTask } = tasksSlice.actions;
export const selectTasks = state => selectTasksState(state).tasks;
export const selectHideDone = state => selectTasksState(state).hideDone;
export const selectAllTasksDone = state => selectTasks(state).every(({ done }) => done);
export const selectTasksAreEmpty = state => selectTasks(state).length === 0;
export default tasksSlice.reducer;