import React from "react";
import { Switch, Route } from "react-router-dom";
import "./App.css";
import { Homepage } from "./pages/homepage/hompeage";
import ShopPage from "./pages/homepage/shop/shop";
import Header from "./components/header/header";
import SignInAndSignUpPage from "./pages/sign-in and sign-up/sign-in/sign-in/sign-in-up";
import { auth } from "./firebase/firebase";

class App extends React.Component {
  constructor() {
    super();

    this.state = {
      currentUser: null,
    };
  }
  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged((user) => {
      this.setState({ currentUser: user });

      console.log(user);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth();
  }

  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser} />
        <Switch>
          <Route exact path="/" component={Homepage} />
          <Route path="/shop" component={ShopPage} />
          <Route path="/signin" component={SignInAndSignUpPage} />
        </Switch>
      </div>
    );
  }
}

export default App;
