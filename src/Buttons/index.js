import "./style.css";

const Buttons = (props) => {
    if (props.tasks.length === 0) {
        return null;
    }
    return (<div className="section__buttonsContainer">
        <button className="section__button">
            {props.hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone</button>
        <button disabled={props.tasks.every(({ done }) => done)} className="section__button">
            Ukończ wszystkie</button>

    </div>)
};

export default Buttons;