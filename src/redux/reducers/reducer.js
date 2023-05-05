import {createStore, combineReducers, applyMiddleware} from "redux";
import thunk from "redux-thunk";
import {postsReducer} from "./postsReducer";
import {commetReducer} from "./commetsReducer";

const rootReducer = combineReducers({
    posts: postsReducer,
    comment: commetReducer
})

export const store = createStore(rootReducer, applyMiddleware(thunk))