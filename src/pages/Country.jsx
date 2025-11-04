import { useEffect, useState, useTransition } from "react"
import { getCountryData } from "../api/postApi";
import { Loader } from "../components/ui/Loader";
import { CountryCard } from "../components/layout/CountryCard";
export const Country = () => {
    const [countries, setCountries] = useState([])
    const [isPending, startTransition] = useTransition();

    useEffect(() => {
        startTransition(async() => {
            const res = await getCountryData()
            setCountries(res.data);
        });
    },[])
    if(isPending) return <h1><Loader /></h1>
    return <section className="country-section">
        <ul className="grid grid-four-cols">
            {countries.map((curCountry, index) => {
                return <CountryCard country = {curCountry} key = {index}/>
})}
        </ul>
    </section>
}