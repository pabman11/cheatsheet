import './App.css'
import React from 'react'
import Index from './components/Index'
// importamos nuestro Provider (export default)
import ContextProvider from './Context/Context'

function App () {
    return (
        <ContextProvider>
            <div className="App">
                <Index />
            </div>
        </ContextProvider>
    )
}

export default App
