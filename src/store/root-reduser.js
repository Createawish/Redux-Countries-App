import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reduser";
import {countriesReduser} from "./countries/countries-reduser";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReduser,
});
