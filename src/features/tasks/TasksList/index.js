import { useDispatch, useSelector } from "react-redux";
import { removeTask, selectTasks, toggleTaskDone } from "../taskSlice";
import { Button, Content, Item, List } from "./styled";

const TasksList = () => {
    const { tasks, hideDone } = useSelector(selectTasks)
    const dipsatch = useDispatch();

    return (<List>
        {tasks.map(task => (
            <Item key={task.id} hidden={task.done && hideDone}>
                <Button
                    onClick={() => dipsatch(toggleTaskDone(task.id))}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>{task.content}</Content>
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