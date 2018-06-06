import React, { Component } from "react";
import { Route, Switch } from "react-router-dom";
import "./App.css";
import Header from "../Header";
import Categories from "../../containers/Categories";
import Posts from "../../containers/Posts";
import Footer from "../Footer";
import PostDetails from "../../containers/PostDetails";
import CreatePost from "../../containers/CreatePost";

class App extends Component {
  componentDidCatch(error, info) {
    console.log(error, info);
  }
  render() {
    return (
      <div className="app">
        <Header />
        <Route exact path="/:category?" component={props => <Categories />} />
        <div className="content">
          <Switch>
            <Route
              exact
              path="/post/create"
              component={props => <CreatePost />}
            />
            <Route
              path="/:category/:post_id"
              component={props => <PostDetails {...props.match.params} />}
            />
            <Route exact path="/" component={props => <Posts />} />
            <Route
              path="/:category"
              component={props => <Posts {...props.match.params} />}
            />
          </Switch>
        </div>
        <Footer />
      </div>
    );
  }
}

export default App;
