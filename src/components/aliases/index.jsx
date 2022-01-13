import reactDom from "react-dom"
import { useEffect, useState } from "react"
import getAliases from "../../services/getAliases"
import Alias from "../Alias"
export default function Aliases()
{
    const [aliases, setAliases] = useState([]);

    useEffect(() =>
    {
        const fetcData = async () => {
            const result = await getAliases();
            setAliases(result);
        }

        fetcData();
    }, []);

    return (
        <>
            <h1>Aliases</h1>
            <section className={`list-none `}>
                {aliases.map(alias => (
                    <Alias key={alias.alias} {...alias} />
                ))}
            </section>
        </>
    )
}