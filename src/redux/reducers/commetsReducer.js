import {types} from "../types";
import axios from "axios";

const initialState = {
    com: []
}

export const commetReducer = (state = initialState, action) => {
    switch (action.type) {
        case types.COMMENTS:
            return {com: action.payload}
        default: return state
    }
}

const addCommet = (value) => {
    return {
        type: types.COMMENTS,
        payload: value
    }
}

export const getCommets = (id) => {
  return async function (dis){
      const {data} = await axios.get(`https://jsonplaceholder.typicode.com/posts/${id}/comments`)
      dis(addCommet(data))
  }
}