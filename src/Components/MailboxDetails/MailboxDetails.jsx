import { useParams } from "react-router";

const mailboxDetails = (props)=>{
    const {mailboxId} = useParams()

    return(
        <>
        <h1>Mailbox details</h1>
        </>
    )
}
