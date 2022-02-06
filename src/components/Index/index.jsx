import { React, useContext } from 'react'
import ListOfAliasTypes from '../ListOfAliasTypes'
import Aliases from '../Aliases'

import { Context } from '../../Context/Context'
export default function Index () {
    // Le pasamos el objeto Context al hook useContext, de este modo podemos retornar nuestras props globales
    const { darkMode, activateDarkMode } = useContext(Context)

    const handleClick = () => {
        activateDarkMode(!darkMode)
    }
    return (
        <div>
            <button onClick={handleClick} className={'bg-red-400 dark:bg-slate-500'}>{darkMode ? 'Light Mode' : 'Dark Mode'}</button>
            <ListOfAliasTypes />
            <Aliases />
        </div>
    )
}
