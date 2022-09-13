import {clearControls} from "./controlsSlice";
import {useDispatch} from "@reduxjs/toolkit";


export const useCleanUp = () => {
    const dispatch = useDispatch();
    const clearUp = () => dispatch(clearControls())
    return {clearUp}
}