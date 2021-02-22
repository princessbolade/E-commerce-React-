import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/hompeage";
import ShopPage from "./pages/homepage/shop/shop";
import Header from "./components/header/header";

function App() {
  return (
    <div className="App">
      <Header />
      <Switch>
        <Route exact path="/" component={Homepage} />
        <Route path="/shop" component={ShopPage} />
      </Switch>
    </div>
  );
}

export default App;
