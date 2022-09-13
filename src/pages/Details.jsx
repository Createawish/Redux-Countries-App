import { useNavigate} from 'react-router-dom';
import { IoArrowBack } from 'react-icons/io5';
import { Button } from '../components/Button';
import CountryDetails from "../feature/details/CountryDetails";
import React from "react";

export const Details = () => {
  const navigate = useNavigate();

  return (
    <div>
      <Button onClick={() => navigate(-1)}>
        <IoArrowBack /> Back
      </Button>
        <CountryDetails/>
    </div>
  );
};
