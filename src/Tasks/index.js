import "./style.css"

const Tasks = (props) => (
    <ul className="list">
        {props.tasks.map(task => (
            <li key={task.id} className={`list__item ${task.done && props.hideDoneTasks ? "list__item--hidden" : ""}`}>
                <button className="list__button">
                    {task.done ? "✔" : ""}</button>
                <span className={`list__text ${task.done ? "list__text--done" : ""}`}>{task.content}</span>
                <button className="list__button list__button--remove">
                    🗑</button>
            </li>
        ))}
    </ul>
);

export default Tasks;