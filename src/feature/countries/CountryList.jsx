import React from 'react';
import {List} from "../../components/List";
import {Card} from "../../components/Card";
import {useCountries} from "./useCountries";

const CountryList = () => {
    const { status, error, navigate, countries} = useCountries();
    return (
        <>
        {error && <h2>Can't fetch data</h2>}
    {status === 'loading' && <h2>Loading...</h2>}
    {status === 'received' && (
        <List>
            {countries.map((c) => {
                const countryInfo = {
                    img: c.flags.png,
                    name: c.name,
                    info: [
                        {
                            title: 'Population',
                            description: c.population.toLocaleString(),
                        },
                        {
                            title: 'Region',
                            description: c.region,
                        },
                        {
                            title: 'Capital',
                            description: c.capital,
                        },
                    ],
                };

                return (
                    <Card
                        key={c.name}
                        onClick={() => navigate(`/country/${c.name}`)}
                        {...countryInfo}
                    />
                );
            })}
        </List>
    )}
    </>
    );
};

export default CountryList;