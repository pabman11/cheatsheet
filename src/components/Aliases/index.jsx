/* eslint-disable react/prop-types */
import { React, useEffect, useState, useContext } from 'react'

import { Context } from '../../Context/Context'
import { nanoid } from 'nanoid'

import Alias from '../Alias'
import Keybinding from '../Keybinding'

const Sheet = ({ type, file }) => {
    const types = ['keybinding', 'alias']

    const classNameHeaderGeneric = 'gap-3 odd:bg-indigo-200 even:bg-indigo-400 hover:bg-blue-200 weight-bold text-neutral-700 hidden sm:grid'
    const classNameGeneric = 'last:rounded-b-xl last: overflow-hidden sm:grid gap-3 odd:bg-red-200 even:bg-red-400 hover:bg-blue-200 text-neutral-700'

    const classNameKeybinding = classNameGeneric + ' grid-cols-5'
    const classNameKeybindingHeader = classNameHeaderGeneric + ' grid-cols-5'

    const classNameAlias = classNameGeneric + ' grid-cols-4'
    const classNameAliasHeader = classNameHeaderGeneric + ' grid-cols-4'
    if (type === 'alias') {
        return (
            <>
                <Alias
                    key={nanoid()}
                    alias={'Alias'}
                    command={'Command'}
                    explain={'Explain'}
                    link={'Link'}
                    className={classNameAliasHeader}
                />
                {file.map((alias) => (
                    <Alias
                        key={nanoid()}
                        alias={alias.alias}
                        command={alias.command}
                        explain={alias.explain}
                        link={alias.link}
                        className={classNameAlias}
                    />
                ))}
            </>
        )
    } else if (type === 'keybinding') {
        return (
            <>
                <Keybinding
                    key={nanoid()}
                    context={'Context'}
                    keybinding={'Keybinding'}
                    command={'Command'}
                    when={'When'}
                    name={'name'}
                    className={classNameKeybindingHeader}
                />
                {[].concat(file)
                    .sort((a, b) => a.context > b.context ? 1 : -1)
                    .map((keybinding) => (
                        <Keybinding
                            key={nanoid()}
                            context={keybinding.context}
                            keybinding={keybinding.key}
                            command={keybinding.command}
                            when={keybinding.when}
                            name={keybinding.name}
                            className={classNameKeybinding}
                        />
                    ))}
            </>
        )
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
            <section className="">
                <Sheet type={aliasType} file={aliases} />
            </section>
        </>
    )
}
