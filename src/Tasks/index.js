import { Button, Content, Item, List } from "./styled";

const Tasks = ({ tasks, hideDoneTasks, removeTask, toggleDoneTask }) => (
    <List>
        {tasks.map(task => (
            <Item key={task.id} hidden={task.done && hideDoneTasks}>
                <Button
                    onClick={() => toggleDoneTask(task.id)}
                >
                    {task.done ? "✔" : ""}
                </Button>
                <Content done={task.done}>{task.content}</Content>
                <Button
                    remove
                    onClick={() => removeTask(task.id)}
                >
                    🗑
                </Button>
            </Item>
        ))}
    </List>
);

export default Tasks;