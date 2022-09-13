import {clearControls} from "./controlsSlice";
import {useDispatch} from "react-redux";


export const useCleanUp = () => {
    const dispatch = useDispatch();
    const clearUp = () => dispatch(clearControls())
    return {clearUp}
}