import {combineReducers} from "redux";
import {themeReducer} from "./theme/theme-reduser";
import {countriesReduser} from "./countries/countries-reduser";
import {controlsReducer} from "./controls/controls-reduser";
import {detailsReduser} from "./detalis/details-reduser";

export const rootReducer = combineReducers({
    theme: themeReducer,
    countries: countriesReduser,
    controls: controlsReducer,
    details: detailsReduser,
});
