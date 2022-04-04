import { React, useContext, useEffect, useState, createRef } from 'react'
import { nanoid } from 'nanoid'
import getListOfAliasFiles from '../../services/getListofAliasFiles'
import getCheatFile from '../../services/getListofAliasFiles/getCheatFile'
import useLocalStorage from '../../utils/useLocalStorage'

import { Context } from '../../Context/Context'
export default function MenuOfFiles () {
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
        if (alias.name !== aliasToShow.name) {
            setCheatFile(alias)
            showAlias(alias)
        }
    }
    useEffect(() => {
        refreshAliasNames()
    }, [])

    return (
        <>
            <h1 className="text-3xl text-center font-bold mb-4">Alias Types</h1>
            <section className="">
                <ul className="list-none flex gap-4 rounded-t-xl overflow-hidden border-solid border-b-2 border-t-2 border-indigo-600">
                    {aliasFiles.map((aliasFile) => (
                        <li
                            className={`first:rounded-tl-xl transform hover:bg-indigo-600 hover:text-white cursor-pointer pt-2 pb-2 pl-2 pr-2 ${aliasFile.name === aliasToShow.name ? 'bg-indigo-600 text-white' : 'text-indigo-600'}`}
                            key={nanoid()}
                            ref={createRef()}
                            onClick={ () => handleClick({ type: aliasFile.cheat_type, file: aliasFile.items, name: aliasFile.name }) }
                        >
                            {aliasFile.name}
                        </li>
                    ))}
                </ul>
            </section>
        </>
    )
}
