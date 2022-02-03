import { useEffect, useState } from "react";
import reactDom from "react-dom";
import getListOfAliasFiles from "../../services/getListofAliasFiles";
import getCheatFile from "../../services/getListofAliasFiles/getCheatFile";

export default function ListOfAliasTypes() {
    const [aliasTypes, setAliasTypes] = useState([]);
    const [aliasFiles, setAliasFIles] = useState([]);

    //read all files from documents directory
    useEffect(() => {

        const fetchData = async () => {
            return await getListOfAliasFiles().then(res => setAliasTypes(res));
        };

        const fetchCheatFile = ({aliasTypes}) => {
            let r = aliasTypes.map(async (aliasFile) => {
                return await getCheatFile({rawFileName: aliasFile.download_url});
            });
            return setAliasFIles(r);
        };

        Promise.all([fetchData(), fetchCheatFile({aliasTypes: aliasTypes})]).then((values) => {
            console.log(aliasTypes,aliasFiles);
        }
        );

    }, []);

    const cyrb53 = function(str, seed = 0) {
        let h1 = 0xdeadbeef ^ seed, h2 = 0x41c6ce57 ^ seed;
        for (let i = 0, ch; i < str.length; i++) {
            ch = str.charCodeAt(i);
            h1 = Math.imul(h1 ^ ch, 2654435761);
            h2 = Math.imul(h2 ^ ch, 1597334677);
        }
        h1 = Math.imul(h1 ^ (h1>>>16), 2246822507) ^ Math.imul(h2 ^ (h2>>>13), 3266489909);
        h2 = Math.imul(h2 ^ (h2>>>16), 2246822507) ^ Math.imul(h1 ^ (h1>>>13), 3266489909);
        return 4294967296 * (2097151 & h2) + (h1>>>0);
    };

    return (
        <>
            <h1 className={`text-3xl text-center font-bold mb-4`}>Alias Types</h1>
            <section className={`container mx-auto px-4`}>
                <ul className={`list-none flex gap-4`}>
                {aliasFiles.map((aliasFile, i) => (
                    <span className={`text-blue-600 transform hover:scale-110 `} key={cyrb53(aliasFile.name)}>{aliasFile.name}</span>
                ))}
                </ul>
            </section>
        </>
    );

}