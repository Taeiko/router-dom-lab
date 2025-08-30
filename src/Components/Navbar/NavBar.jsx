import { Link } from "react-router"
import "../../index.css"
const NavBar = () => {
  return (
    <>
    <nav className="nav">
        <Link to="/">Home</Link>
        <Link to="/mailboxes">Mailboxes</Link>
        <Link to="/new-mailbox">New Mailbox</Link>
        </nav>
    </>
  )
}

export default NavBar;
