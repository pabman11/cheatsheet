import { React, useContext, useEffect, useState } from 'react'
import { nanoid } from 'nanoid'
import getListOfAliasFiles from '../../services/getListofAliasFiles'
import getCheatFile from '../../services/getListofAliasFiles/getCheatFile'
import useLocalStorage from '../../utils/useLocalStorage'

import { Context } from '../../Context/Context'
export default function ListOfAliasTypes () {
    const [aliasFiles, setAliasFiles] = useState([])
    const [cheatFile, setCheatFile] = useLocalStorage('cheatFile', {})
    const [darkMode, aliasToShow, showAlias, activateDarkMode] = useContext(Context)
    let aliasTypes = []

    function setAliasTypes (alias) {
        aliasTypes = alias
    }
    async function refreshAliasNames () {
        await getListOfAliasFiles().then((res) => setAliasTypes(res))

        setAliasFiles([])
        await aliasTypes.forEach(async (ghRef) => {
            await getCheatFile({ rawFileName: ghRef.download_url }).then((res) => {
                setAliasFiles((prev) => [...prev, res])
            })
        })
    }
    function handleClick (alias) {
        setCheatFile(alias)
        showAlias(alias)
    }
    useEffect(() => {
        refreshAliasNames()
    }, [])

    return (
        <>
            <h1 className="text-3xl text-center font-bold mb-4">Alias Types</h1>
            <section className="container mx-auto px-4">
                <ul className="list-none flex gap-4">
                    {aliasFiles.map((aliasFile) => (
                        <li
                            className={'text-blue-600 transform hover:scale-110 '}
                            key={nanoid()}
                            onClick={ () => handleClick({ type: aliasFile.cheat_type, file: aliasFile.items }) }
                        >
                            {aliasFile.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
