import React, {useState} from 'react'
import AddIcon from '@material-ui/icons/Add';

const Form = (props) => {

  const [note, setNote] = useState({
    title: "",
    content: ""
  })

  function handleChange(e) {
    const {name, value} = e.target;

    setNote(previousValue => {
      return {
        ...previousValue,
        [name]: value
      }
    });
  }

  function handleClick(e) {
    e.preventDefault();

    props.onAdd(note);
    setNote({
      title: "",
      content: ""
    });
  }
  
  return (
    <div>
      <form>
        <input 
          onChange={handleChange}
          type="text" 
          name="title"
          value={note.title} 
          placeholder="Note Title" 
        />
        <textarea
          onChange={handleChange}
          name="content"
          value={note.content} 
          placeholder="Note Content"
        ></textarea>
        <button 
          onClick={handleClick}
        >
          <AddIcon />
        </button>
      </form>
    </div>
  )
}

export default Form
