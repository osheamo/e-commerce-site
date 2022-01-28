import {
  Route,
  Switch,
} from "react-router-dom";
import "./App.css";
import HomePage from "./pages/homepage/homepage.component";
import Hats from "./components/hats/hats.component";

function App() {
  return (
    <Switch>
        <Route exact path="/" component={HomePage} />
        <Route path="/hats" component={Hats} />
    </Switch>
  );
}

export default App;
