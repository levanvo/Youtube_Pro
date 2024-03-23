import { legacy_createStore as createStore, combineReducers } from "redux";
import User_Info from "./User";

const root = combineReducers({
    getUser: User_Info,
});

const store = createStore(root);

export default store;