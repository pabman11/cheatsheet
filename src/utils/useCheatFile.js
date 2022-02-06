import { useEffect, useState } from 'react'

function getCheatFile () {
    return JSON.parse(localStorage.getItem('cheatFile'))
}

export default function useCheatFile () {
    const [cheatfile, setCheatfile] = useState(getCheatFile())

    useEffect(() => {
        function handleChangeStorage () {
            setCheatfile(getCheatFile())
        }
        window.addEventListener('storage', handleChangeStorage)
        console.log('useCheatFile: addEventListener')
        return () => {
            window.removeEventListener('storage', handleChangeStorage)
            console.log('useCheatFile: removeEventListener')
        }
    }, [localStorage.getItem('cheatFile')])

    return cheatfile
}
