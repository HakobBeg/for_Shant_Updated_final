import { combineReducers,createStore } from "redux";
import { rootReducer } from "./Reducers";



export const store = createStore(combineReducers(rootReducer));


