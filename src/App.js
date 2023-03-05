import { HashRouter, Redirect, Route, Switch } from "react-router-dom";
import AuthorPage from "./common/AuthorPage";
import Navigation from "./common/Navigation";
import TaskPage from "./features/tasks/TaskPage";
import TasksPage from "./features/tasks/TasksPage";

const App = () => (
    <HashRouter>
        <Navigation links={[
            { content: "Zadania", id: "/zadania", },
            { content: "O autorze", id: "/autor", }
        ]} />

        <Switch>
            <Route path={"/zadania/:id"}>
                <TaskPage />
            </Route>
            <Route path={"/autor"}>
                <AuthorPage />
            </Route>
            <Route path={"/zadania"}>
                <TasksPage />
            </Route>
            <Route path={"/"}>
                <Redirect to="/zadania" />
            </Route>
        </Switch>
    </HashRouter>
);

export default App