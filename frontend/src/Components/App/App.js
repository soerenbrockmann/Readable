import React, { Component } from "react";
import { Route } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Categories from "../../Containers/Categories";
import Posts from "../../Containers/Posts";
import HandlePost from "../../Containers/HandlePost";
import Footer from "../Footer";

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/" component={props => <Categories />} />
        <Route
          exact
          path="/category/:category?"
          component={props => <Categories />}
        />
        <div className="content">
          <Route exact path="/" component={props => <Posts />} />
          <Route
            exact
            path="/category/:category"
            component={props => <Posts {...props.match.params} />}
          />
          <Route
            exact
            path="/posts/handlePost/:action/:id?"
            component={(props, { history }) => (
              <HandlePost {...props.match.params} />
            )}
          />
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
