import {useNavigate, useParams} from "react-router-dom";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {clearDetails, loadCountryByName} from "./detailsSlice";


export const useDetails = () => {
    const { name } = useParams();
    const navigate = useNavigate();
    const dispatch = useDispatch();
    const {currentCountry, error, status} = useSelector(selectDetails)

    useEffect(() => {
        dispatch(loadCountryByName(name))

        return () => {
            dispatch(clearDetails())
        }
    },[name,dispatch])
    return {navigate, name, currentCountry, error, status}
}