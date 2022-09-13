import axios from "axios";
import * as api from './config';
import {configureStore} from '@reduxjs/toolkit'
import {themeReducer} from "./feature/theme/themeSlice";
import {controlsReducer} from "./feature/controls/controlsSlice";
import {countryReducer} from "./feature/countries/countriesSlice";

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        controls: controlsReducer,
        countries: countryReducer,
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
