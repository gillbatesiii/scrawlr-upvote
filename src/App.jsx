import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import UpvotesList from "~/components/UpvotesList/index.jsx";

function App() {

  return (
    <>
        <UpvotesList />
        <UpvotesList />
        <UpvotesList />
    </>
  )
}

export default App
