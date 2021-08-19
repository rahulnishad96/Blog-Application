import { combineReducers } from "redux";
import blogsReducers from "./reducer";

const rootReducer = combineReducers({
    data: blogsReducers
});

export default rootReducer;