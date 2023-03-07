import { createStore } from "redux";
import rootReducer from "./services/Reducer/combineReducer";

const Store = createStore(
    rootReducer
)

export default Store