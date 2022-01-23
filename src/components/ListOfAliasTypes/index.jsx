import { useEffect, useState } from "react";
import reactDom from "react-dom";
import getListOfAliasFiles from "../../services/getListofAliasFiles";

export default function ListOfAliasTypes() {
    const [aliasTypes, setAliasTypes] = useState([]);

    //read all files from documents directory
    useEffect(() => {
        const fetchData = async () => {
            const result = await getListOfAliasFiles();
            setAliasTypes(result);
        };

        fetchData();

    }, []);

    return (
        <>
            <h1 className={`text-3xl text-center font-bold mb-4`}>Alias Types</h1>
            <section className={`container mx-auto px-4`}>
                {aliasTypes.map((aliasType) => (
                    <span key={aliasType.name}>{aliasType.name}</span>
                ))}
            </section>
        </>
    );

}