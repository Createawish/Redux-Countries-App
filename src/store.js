import axios from "axios";
import * as api from './config';
import {configureStore} from '@reduxjs/toolkit'
import {themeReducer} from "./feature/theme/themeSlice";
import {controlsReducer} from "./feature/controls/controlsSlice";
import {countryReducer} from "./feature/countries/countriesSlice";
import {detailsReducer} from "./feature/details/detailsSlice";

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
        details: detailsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddlware) => getDefaultMiddlware({
      thunk:{
        extraArgument: {
            client: axios,
            api,
        },
      },
       serializableCheck:  false,
    })
});
