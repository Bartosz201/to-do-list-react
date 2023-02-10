import "./style.css";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, toggleDoneAll }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (<div className="buttons">
        <button
            onClick={toggleHideDone}
            className="buttons__button">
            {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
        </button>
        <button
            onClick={toggleDoneAll}
            disabled={tasks.every(({ done }) => done)}
            className="buttons__button">
            Ukończ wszystkie
        </button>
    </div>)
};

export default Buttons;