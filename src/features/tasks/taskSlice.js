import { createSlice } from "@reduxjs/toolkit";

const tasksSlice = createSlice({
    name: 'tasks',
    initialState: {
        tasks: [],
        hideDone: false,
    },
    reducers: {
        addTasks: ({ tasks }, { payload }) => {
            tasks.push(payload);
        },

        toggleHideDone: (state) => {
            state.hideDone = !state.hideDone;
        },

        toggleTaskDone: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks[index].done = !state.tasks[index].done;
        },

        toggleDoneAll: ({tasks}) => {
            tasks.forEach(task => {
                task.done = true
            })
        },

        removeTask: (state, action) => {
            const index = state.tasks.findIndex(task => task.id === action.payload);
            state.tasks.splice(index,1);
        },
        
    }
});

export const { addTasks, toggleHideDone, toggleTaskDone, toggleDoneAll, removeTask } = tasksSlice.actions;
export const selectTasks = state => state.tasks;
export default tasksSlice.reducer;