const localSorageKey = "tasks"

export const saveTasksInLocalStorage = (tasks) => {
    localStorage.setItem(localSorageKey, JSON.stringify(tasks));
};

export const getTasksFromLocalStorage = () => 
    JSON.parse(localStorage.getItem(localSorageKey)) || []
