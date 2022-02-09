import { React, useEffect, useState, useContext } from 'react'

import { Context } from '../../Context/Context'
import { nanoid } from 'nanoid'

import Alias from '../Alias'
import Keybinding from '../Keybinding'

const Sheet = ({ type, file }) => {
    const types = ['keybinding', 'alias']
    const className = 'last:rounded-b-xl last: overflow-hidden grid grid-cols-5 gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200'
    if (type === 'alias') {
        return file.map((alias) => (
            <Alias
                key={nanoid()}
                alias={alias.alias}
                command={alias.command}
                explain={alias.explain}
                link={alias.link}
                className={className}
            />
        ))
    } else if (type === 'keybinding') {
        return file.map((keybinding) => (
            <Keybinding
                key={nanoid()}
                context={keybinding.context}
                keybinding={keybinding.key}
                command={keybinding.command}
                when={keybinding.when}
                name={keybinding.name}
                className={className}
            />
        ))
    } else {
        return ('')
    }
}

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
                <Sheet type={aliasType} file={aliases} />
            </section>
        </>
    )
}
