import "./App.css";
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Redirect,
} from "react-router-dom";
import Topbar from "./components/topbar/Topbar";
import Home from "./components/home/Home";
import Register from "./components/form/Register";
import Footer from "./components/footer/Footer";
import Users from "./components/users/Users";
import PageNotFound from "./components/pagenotfound/PageNotFound";

function App() {
  return (
    <div className="App">
      <Router>
        <Topbar />
        <div className="sections">
          <Switch>
            <Route exact path="/">
              <Home />
            </Route>

            <Route path="/home">
              <Redirect to="/" />
            </Route>

            <Route exact path="/users">
              <Users />
            </Route>

            <Route exact path="/register">
              <Register />
            </Route>

            <Route path="*">
              <PageNotFound />
            </Route>
          </Switch>
        </div>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
