import { React, useEffect, useState, useContext } from 'react'

import { Context } from '../../Context/Context'
import { nanoid } from 'nanoid'

import Alias from '../Alias'

export default function Aliases () {
    const [aliases, setAliases] = useState([])
    const [aliasType, setAliasType] = useState({ type: 'alias' })
    const [darkMode, aliasToShow, showAlias, activateDarkMode] = useContext(Context)

    useEffect(() => {
        if (aliasToShow.file) {
            setAliases(aliasToShow.file)
            setAliasType(aliasToShow.type)
        }
    }, [aliasToShow])

    return (
        <>
            <section className="container mx-auto px-4">
                {aliases.map((alias) => (
                    <Alias
                        key={nanoid()}
                        alias={alias.alias}
                        command={alias.command}
                        explain={alias.explain}
                        link={alias.link}
                    />
                ))}
            </section>
        </>
    )
}
