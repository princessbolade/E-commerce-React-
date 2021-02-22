import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/hompeage";
import ShopPage from "./pages/homepage/shop/shop";

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
