import { Link } from "react-router"

const MailboxList = ({ mailboxes }) => {
  return (
    <>
      <h1>Mailbox List</h1>
      {mailboxes.map((box) => (
        <div className="mail-box" key={box._id}>
        <Link to={`/mailboxes/${box._id}`}>Mailbox {box._id}</Link>
        </div>
      ))}
    </>
  )
}

export default MailboxList;
