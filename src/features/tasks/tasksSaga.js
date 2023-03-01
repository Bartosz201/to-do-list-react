import { call, takeEvery, put, delay, select } from "redux-saga/effects"
import { getExapleTasks } from "../getExapleTasks"
import { fetchExampleTasks, selectTasks, setDownloadStatus, setTasks } from "./taskSlice"
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHendler() {
    try {
        yield put(setDownloadStatus("loading"));
        yield delay(2000);
        const exampleTasks = yield call(getExapleTasks);
        yield put(setTasks(exampleTasks));
        yield put(setDownloadStatus("active"));
    } catch (error) {
        yield put(setDownloadStatus("failure"));
    }
}

function* saveTasksInLocalStorageHendler() {
    const tasks = yield select(selectTasks);
    yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
    yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHendler)
    yield takeEvery("*", saveTasksInLocalStorageHendler)
}