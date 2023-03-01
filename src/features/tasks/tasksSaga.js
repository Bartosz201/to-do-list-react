import {call, takeEvery, put, delay} from "redux-saga/effects"
import { getExapleTasks } from "../getExapleTasks"
import { fetchExampleTasks, setDownloadStatus, setTasks } from "./taskSlice"

function* fetchExampleTasksHendler(){
    try{
        yield put(setDownloadStatus("loading"));
        yield delay(2000);
        const exampleTasks = yield call(getExapleTasks);
        yield put(setTasks(exampleTasks));
        yield put(setDownloadStatus("active"));  
    } catch (error){
        yield put(setDownloadStatus("failure"));
    }
}

 export function* watchFetchExampleTasks(){
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler )
}