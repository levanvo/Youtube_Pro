import { legacy_createStore as createStore, combineReducers } from "redux";
import Users from "./Users/User";

const root = combineReducers({
    Info_users: Users,
});

const store = createStore(root);

export default store;