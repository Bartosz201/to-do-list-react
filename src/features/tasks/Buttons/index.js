import { useDispatch, useSelector } from "react-redux";
import { selectAllTasksDone, selectHideDone, selectTasksAreEmpty, toggleDoneAll, toggleHideDone } from "../taskSlice";
import { Button, ButtonsContainer } from "./styled";

const Buttons = () => {
    const hideDone = useSelector(selectHideDone)
    const allTasksDone = useSelector(selectAllTasksDone)
    const tasksAreEmpty = useSelector(selectTasksAreEmpty)
    const dispatch = useDispatch();

    if (tasksAreEmpty) {
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
                disabled={allTasksDone}
            >
                Ukończ wszystkie
            </Button>
        </ButtonsContainer>)
};

export default Buttons;