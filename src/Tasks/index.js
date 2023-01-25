import "./style.css"

const Tasks = ({ tasks, hideDoneTasks, removeTask }) => (
    <ul className="list">
        {tasks.map(task => (
            <li key={task.id} className={`list__item ${task.done && hideDoneTasks ? "list__item--hidden" : ""}`}>
                <button className="list__button">
                    {task.done ? "✔" : ""}
                </button>
                <span className={`list__text ${task.done ? "list__text--done" : ""}`}>{task.content}</span>
                <button
                    onClick={() => removeTask(task.id)}
                    className="list__button list__button--remove">
                    🗑
                </button>
            </li>
        ))}
    </ul>
);

export default Tasks;