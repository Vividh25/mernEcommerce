import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Jumbotron } from "react-bootstrap";
import Home from "./containers/Home";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import SignIn from "./containers/SignIn";
import SignUp from "./containers/SignUp";

function App() {
    return (
        <div className="app">
            <Router>
                <Switch>
                    <Route path="/signin" component={SignIn} />
                    <Route path="/signup" component={SignUp} />
                    <Route path="/" exact component={Home} />
                </Switch>
            </Router>
        </div>
    );
}

export default App;
