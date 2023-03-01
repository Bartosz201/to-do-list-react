export const getExapleTasks = async () =>{
    const response = await fetch("/to-do-list-react/exampleTasks.json")

    if(!response.ok){
        new Error(response.statusText)
    }

    return await response.json();
}