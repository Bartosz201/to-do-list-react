import { useDispatch, useSelector } from "react-redux";
import { selectTasks, toggleDoneAll, toggleHideDone } from "../taskSlice";
import { Button, ButtonsContainer } from "./styled";

const Buttons = () => {
    const { tasks, hideDone } = useSelector(selectTasks);
    const dispatch = useDispatch();

    if (tasks.length === 0) {
        return null;
    }

    return (
        <ButtonsContainer>
            <Button
                onClick={() => dispatch(toggleHideDone())}
            >
                {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
                onClick={() => dispatch(toggleDoneAll())}
                disabled={tasks.every(({ done }) => done)}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>)
};

export default Buttons;