import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reduser";

export const rootReducer = combineReducers({
    theme: themeReducer,
});
