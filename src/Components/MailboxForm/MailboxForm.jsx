import { useState } from "react"
import { useNavigate } from "react-router"

const MailboxForm = ({addMailbox}) =>{
    const [formData, setFormData] = useState({
    _id: Number,
    boxSize: '',
    boxOwner: '',
    })
    




const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
        console.log(formData)
}

const handleSubmit = (event)=>{
event.preventDefault()
addMailbox()
}
return(
    <>
        <h1>New Mailbox</h1>
        <form onSubmit={handleSubmit}>
            <label>Name of mailbox owner:</label>
            <input name="boxOwner"  value={formData.boxOwner} onChange={handleChange}/>
            <br />
            <label>Select a Box Size: </label>
            <select name="boxSize" value={formData.boxSize} onChange={handleChange}> 
            <option value="Small">Small</option>
            <option value="Medium">Medium</option>
            <option value="Large">Large</option>
            </select>  
            <button type='submit'>Submit</button>
        </form>
    </>
    )
}
export default MailboxForm