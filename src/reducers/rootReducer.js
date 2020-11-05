import { combineReducers } from "redux";
import entryReducer from './entryReducer';

const rootReducer = combineReducers({
    entryReducer: entryReducer,
})

export default rootReducer;