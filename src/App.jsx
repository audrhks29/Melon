import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import GlobalStyle from './components/styled/GlobalStyle'
import Melon from './components/melon/Melon'
// import './App.css'


function App() {
  return (
    <div>
      <GlobalStyle />
      <Melon />
    </div>
  )
}

export default App
