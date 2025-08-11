import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = ({addMailbox}) =>{
    const [formData, setFormData] = useState({
    _id: 1,
    boxSize: 'Small',
    boxOwner: 'Alex',
    })
}