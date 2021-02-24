import {BrowserRouter, Route, Switch} from "react-router-dom";

const App = () => <BrowserRouter>
    <Switch>
        <Route path="/">
            <div data-testid="app">Works!</div>
        </Route>
    </Switch>
</BrowserRouter>;

export default App;
