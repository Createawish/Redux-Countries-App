import axios from "axios";
import * as api from './config';
import {configureStore} from '@reduxjs/toolkit'
import {themeReducer} from "./feature/theme/themeSlice";

export const store = configureStore({
    reducer:{
        theme: themeReducer
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
