import { applyMiddleware, combineReducers, compose, createStore } from "redux";
import { thunk } from "redux-thunk";
import { userReducer } from "./reducers/userReducer";
import { usersReducer } from "./reducers/usersReducer";
import { postReducer } from "./reducers/postReducer";
import { postsReducer } from "./reducers/postsReducer";

const reducer = combineReducers({
  user: userReducer,
  users: usersReducer,
  post: postReducer,
  posts: postsReducer
})
const composeEnhangers = window.__REDUX_DEVTOOLS_EXTENSION_OMPOSE__ || compose

export const store = createStore(reducer, composeEnhangers(applyMiddleware(thunk)))