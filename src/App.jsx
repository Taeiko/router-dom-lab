import { BrowserRouter as Router, Routes, Route } from "react-router"
import { useState } from "react"
import NavBar from "./Components/Navbar/NavBar"
import MailboxList from "./Components/MailboxList/MailboxList"
import MailboxForm from "./Components/MailboxForm/MailboxForm"

const App = () => {
  const [mailboxes, setMailboxes] = useState([])

  const addMailbox = (formData) => {
    const newBox = {
      _id: mailboxes.length + 1,
      ...formData
    }
    setMailboxes([...mailboxes, newBox])
  }
  
  return (
    <Router>
      <NavBar />
      <Routes>
        <Route path="/"element={<main> <h1>Post Office</h1></main>}></Route>
        <Route path ="/mailboxes" element={<MailboxList/>}></Route>
        <Route path ="/new-mailbox" element={<MailboxForm/>}></Route>
        
      </Routes>
    </Router>
  )
}
export default App

{/* 
1. create routes to show the MailboxForm, MailboxList
2. Create a function in App.jsxs that will add the parameter to the state
3. pass the function down to the MailBoxForm Component.
3.5 in this (props) component have an onclick that will take form data and call the function we just built with the form data
 */}

