import { Button, ButtonsContainer } from "./styled";

const Buttons = ({ tasks, hideDoneTasks, toggleHideDone, toggleDoneAll }) => {
    if (tasks.length === 0) {
        return null;
    }

    return (
        <ButtonsContainer>
            <Button
                onClick={toggleHideDone}
            >
                {hideDoneTasks ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={toggleDoneAll}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>)
};

export default Buttons;