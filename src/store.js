import { createStore,combineReducers } from "redux";
import AppReducer from "./redux/reducers/AppReducer";

const rootReducer = combineReducers({
    AppReducer,
});

const store = createStore(rootReducer);

export default store;