import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
export const Country = () => {
    const [countries, setCountries] = useState([])
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData()
            setCountries(res);
        });
    },[])
    if(isPending) return <h1><Loader /></h1>
    return <section className="country-section">
        <ul className="grid grid-four-cols">
            {countries.map((curCountry, index) => {
                <CountryCard country = {country} key = {index}/>
            })}
        </ul>
    </section>
}