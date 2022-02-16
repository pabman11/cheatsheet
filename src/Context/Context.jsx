import React, { createContext, useState } from 'react'

// Exportamos la instancia del objecto Context
export const Context = createContext()

// Creamos un componente Provider el cual recibe como props los children
// eslint-disable-next-line react/prop-types
const Provider = ({ children }) => {
    // En este ejercicio vamos a crear una props darkMode y a su vez la vamos a guardar en el Local Storage ;)
    const [darkMode, setDarkMode] = useState(() => {
        const val = window.localStorage.getItem('darkMode')

        const root = window.document.documentElement
        if (val === 'true') {
            root.classList.add('dark')
        } else {
            root.classList.add('light')
        }
        // La razon de este if es porque cuando obtenemos datos del LS, este viene desde un JSON lo cual se parsea como un String
        // Pero para mi caso lo quiero como un boolean
        if (val === 'true') return true
        else return false
    })

    const [aliasToShow, setAliasToShow] = useState(() => {
        const val = window.localStorage.getItem('cheatFile')
        if (val) return JSON.parse(val)
        else return {}
    })

    // Value es el objeto con los valores y sus respectivas funciones de alteracion de los mismos
    // Piensa que aqui van a estar todas las props que quieres compartir y las funciones para cambiar sus valores
    const value = {
        darkMode,
        aliasToShow,
        showAlias: (alias) => {
            setAliasToShow(alias)
        },
        activateDarkMode: (val) => {
            setDarkMode(val)
            const root = window.document.documentElement
            root.classList.toggle('dark')
            root.classList.toggle('light')
            window.localStorage.setItem('darkMode', val)
        }
    }
    return (
        <Context.Provider value={[value.darkMode, value.aliasToShow, value.showAlias, value.activateDarkMode]}>
            {children}
        </Context.Provider>
    )
}

// Exportamos by defult nuestro componente Provider, pues lo vamos a usar para proveer nuestro Context en la app
export default Provider
