import { useDispatch, useSelector } from "react-redux";
import { useLocation } from "react-router-dom";
import { querySearchParameter } from "../querySearchParameter";
import { removeTask, selectHideDone, selectTaskByQuery, toggleTaskDone } from "../taskSlice";
import { Button, Content, Item, List, StyledLink } from "./styled";

const TasksList = () => {
    const location = useLocation()
    const searchParams = new URLSearchParams(location.search)
    const query = searchParams.get(querySearchParameter)

    const tasks = useSelector(state => selectTaskByQuery(state, query))
    const hideDone = useSelector(selectHideDone)
    const dipsatch = useDispatch();

    return (<List>
        {tasks.map(task => (
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button
                    onClick={() => dipsatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}><StyledLink to={`/zadania/${task.id}`}>{task.content}</StyledLink></Content>
                <Button
                    remove
                    onClick={() => dipsatch(removeTask(task.id))}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>)
};

export default TasksList;