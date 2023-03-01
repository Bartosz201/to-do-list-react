import { useSelector } from "react-redux"
import { useParams } from "react-router-dom"
import Container from "../../common/Container"
import Header from "../../common/Header"
import Section from "../../common/Section"
import { TextWraper } from "../../common/TextWraper"
import { selectTaskById } from "./taskSlice"


const TaskPage = () =>{
    const params = useParams();

    const task = useSelector(state => selectTaskById(state, params.id))

    return (
        <Container>
            <Header title={"Szczegóły zadania"} />
            <Section
            title={task.content}
            body={<TextWraper>Ukończone: {task.done?"Tak":"Nie"}</TextWraper>}
            />
        </Container>
    )
}

export default TaskPage