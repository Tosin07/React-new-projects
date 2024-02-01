import { useState } from "react"


export const List = (props) => {
    const [note, setNote] = useState({
        title:"",
        content:""
    })
    function handleChange(event) {
     const {name, value} = event.target
     setNote((prevValue) => {
        return {...prevValue, [name]: value}
     })
    }
    function handleSubmit(e) {

      props.onAdd(note)
    e.preventDefault()
    }
    return(
    <div>
        <form className="create-area-note">
        <input 
        name="title" 
        value={note.title} 
        placeholder="title"
        onChange={handleChange}
        >

        </input>
        <textarea 
        name="content" 
        value={note.content}
        placeholder="take a note" 
        rows={5}
        onChange={handleChange}>

        </textarea>
        <button onClick={handleSubmit}>Add</button>
        </form>
    </div>
    )
    
}