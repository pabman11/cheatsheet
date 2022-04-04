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
        <div className='lg:container mx-auto px-4 '>
            <div className="flex items-center mr-4 mb-2" id='darkMode-container'>
                <input type={'checkbox'} onChange={handleClick} className={'hidden sr-only'} id={'darkMode'} />
                <label htmlFor={'darkMode'} className={''}></label>
            </div>
            <MenuOfFiles />
            <Aliases />
        </div>
    )
}
