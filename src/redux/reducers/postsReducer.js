import {types} from "../types";
import axios from "axios";

const initialState = {
    posts: []
}

export const postsReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.POSTS:
            return {posts: action.payload}
        default: return state
    }
}

const addPosts = (value) => {
    return {
        type: types.POSTS,
        payload: value
    }
}

export const getPosts = () => {
    return dispatch => {
        axios.get('https://jsonplaceholder.typicode.com/posts')
            .then(res => dispatch(addPosts(res.data)))
    }
}