import { useDispatch, useSelector } from "react-redux"
import { Button } from "../Button/styled";
import { fetchExampleTasks, selectDownloadStatus } from "../taskSlice";


const AddExampleTasksButton = () => {
    const dispatch = useDispatch();
    const downloadStatus = useSelector(selectDownloadStatus)


    return (
        <Button
            onClick={() => dispatch(fetchExampleTasks())}
            disabled={downloadStatus !== "active"}
            failure={downloadStatus === "failure"}
        >
            {downloadStatus === "active" ?
                "Pobierz przykładowe zadanie" :
                downloadStatus === "loading" ?
                    "Ładowanie..." :
                    "Coś poszło nie tak!"}
        </Button>
    )
}

export default AddExampleTasksButton;