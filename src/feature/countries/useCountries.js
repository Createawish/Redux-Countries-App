import {useNavigate} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {selectCountriesInfo, selectVisibleCountries} from "./countriesSlice";
import {useEffect} from "react";
import {loadCountries} from "./countriesSlice";
import {selectControls} from "../controls/controlsSlice";


export const useCountries = () => {
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {search, region}= useSelector(selectControls);

    const countries = useSelector(state => selectVisibleCountries(state, {search, region}));
    const {status, error, qty} = useSelector(selectCountriesInfo);


    useEffect(() => {
        if(!qty) {
            dispatch(loadCountries());
        }
    },[qty,dispatch]);

    return{navigate,countries,status,error,}
}