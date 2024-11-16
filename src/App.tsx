import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { useCounterStore } from './store/counter'
import axios from 'axios'

function App() {
  const { count, updateCount, username, setUsername } = useCounterStore()

  return (

    <div className='bg-red-500 w-[69px]'>

      {count} {username}
      <button onClick={() => updateCount()}>click me </button>
      <button onClick={() => setUsername('ice')}>setName </button>

    </div>
  )
}

export default App
