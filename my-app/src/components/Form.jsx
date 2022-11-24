import { useState  } from "react"
import { Authors } from "../utils/constants"

export const Form = ({onSendMessage}) => {
const[value, setValue]  = useState('')

const changeValue = (e) => {
    setValue(e.target.value)
}
const preventSubmit = (e) =>
{
    e.preventDefault()
    onSendMessage({
        text:value,
        author: Authors.human,
        id: Date.now()
    })
    setValue('')
}
return(
    <form onSubmit={preventSubmit}>
    <input type="text"  value={value} onChange={changeValue} focus/>
    <input type="submit" />
    </form>

    )
}