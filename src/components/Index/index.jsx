import { React, useContext } from 'react'
import MenuOfFiles from '../MenuOfFiles'
import Aliases from '../Aliases'

import { Context } from '../../Context/Context'
export default function Index () {
    // Le pasamos el objeto Context al hook useContext, de este modo podemos retornar nuestras props globales
    const [darkMode, aliasToShow, showAlias, activateDarkMode] = useContext(Context)

    const handleClick = () => {
        activateDarkMode(!darkMode)
    }
    return (
        <div>
            <div className="flex items-center mr-4 mb-2">
                <input type={'checkbox'} onChange={handleClick} className={'hidden sr-only'} id={'darkMode'} />
                <label htmlFor={'darkMode'} className={'inline-block rounded-4xl px-10 py-1 bg-blue-400 dark:bg-blue-900'}><span>{darkMode ? 'Light Mode' : 'Dark Mode'}</span></label>
            </div>
            <MenuOfFiles />
            <Aliases />
        </div>
    )
}
