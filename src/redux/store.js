import { applyMiddleware, combineReducers, legacy_createStore as createStore } from "redux";
import noteReducer from "./noteReducer";
import { composeWithDevTools } from "@redux-devtools/extension";
import { thunk } from "redux-thunk";
import authReducer from "./authReducer";


const rootReducer = combineReducers({
    notes: noteReducer,
    auth: authReducer,
})

export const store = createStore(
    rootReducer,
    composeWithDevTools(applyMiddleware(thunk))
);