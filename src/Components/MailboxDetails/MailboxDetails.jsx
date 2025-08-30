import { useParams } from "react-router";

const mailboxDetails = (props)=>{
    const {mailboxId} = useParams()
    const selectedMailbox = mailboxes.find((mailbox) => mailbox._id)
    return(
        <>
        <h1>Mailbox details</h1>
        <p>Owner: {selectedMailbox.boxOwner}</p>
        <p>ID: {selectedMailbox._id}</p>
        <p>Size: {selectedMailbox.boxSize}</p>
        </>
    )
}
