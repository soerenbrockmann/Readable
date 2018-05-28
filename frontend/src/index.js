import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter } from "react-router-dom";
import "./index.css";
import App from "./Components/App";
import registerServiceWorker from "./registerServiceWorker";
import { createStore, applyMiddleware, compose, combineReducers } from "redux";
import thunk from "redux-thunk";
import {
  categoriesReducer,
  postsReducer,
  sortReducer,
  handlePostReducer,
  loginReducer,
  commentsReducer,
  handleCommentReducer
} from "./Reducers";
import { Provider } from "react-redux";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const combinedReducers = combineReducers({
  categories: categoriesReducer,
  posts: postsReducer,
  sort: sortReducer,
  selectedPost: handlePostReducer,
  login: loginReducer,
  comments: commentsReducer,
  selectedComment: handleCommentReducer
});

const store = createStore(
  combinedReducers,
  composeEnhancers(applyMiddleware(thunk))
);

ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById("root")
);
registerServiceWorker();
