import { useState } from 'react'
import { BrowserRouter as Router, Routes, Route } from 'react-router'
import NavBar from './Components/Navbar/NavBar'

const App = () => {
  const addMailbox = (FormData) => {
    const newMailbox = {}
  }
  return(

<Router>
  <NavBar />
   <Routes>
    <Route path ="/" element= {<main><h1>Post Office</h1></main>}></Route>
   </Routes>
</Router>
  )
}
export default App