import { legacy_createStore as createStore, combineReducers } from "redux";
import Users from "./Users/User";
import Videos from "./Video/Video";
import Chanels from "./Chanels/Chanels";

const root = combineReducers({
    Info_users: Users,
    Info_videos: Videos,
    Info_chanels: Chanels
});

const store = createStore(root);

export default store;