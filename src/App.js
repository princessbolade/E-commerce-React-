import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/hompeage";

const BeaniesPage = () => (
  <div>
    <h1>Beanies PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/hats" component={BeaniesPage} />
      </Switch>
    </div>
  );
}

export default App;
