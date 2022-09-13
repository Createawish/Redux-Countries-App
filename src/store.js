import axios from "axios";
import * as api from './config';
import {configureStore} from '@reduxjs/toolkit'
import {themeReducer} from "./feature/theme/themeSlice";
import {controlsReducer} from "./feature/controls/controlsSlice";

export const store = configureStore({
    reducer:{
        theme: themeReducer,
        controls: controlsReducer,
    },
    devTools: true,
    middleware: (getDefaultMiddleware) => getDefaultMiddlware ({
      thunk:{
        extraArgument: {
            client: axios,
            api,
        },
      },
       serializableCheck:  false,
    })
});
