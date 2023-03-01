import { HashRouter, Route, Switch } from "react-router-dom";
import AuthorPage from "./common/AuthorPage";
import Navigation from "./common/Navigation";
import TasksPage from "./features/tasks/Tasks";

const App = () => (
    <HashRouter>
        <Navigation links={[
            { content: "Zadania", id: "/zadania", },
            { content: "O autorze", id: "/autor", }
        ]} />

        <Switch>
            <Route path={"/zadania"}>
                <TasksPage />
            </Route>
            <Route path={"/autor"}>
                <AuthorPage />
            </Route>
        </Switch>
    </HashRouter>
);

export default App