import React, {useState} from 'react'



export default function TextForm(props) {
    const handleUpCLick = ()=> {
        let newText = Text.toUpperCase();
        setText(newText);
        props.showAlert('Converted to UpperCase', 'success')
    }
    const handlelowCLick = ()=> {
        let newText = Text.toLowerCase();
        setText(newText);
        props.showAlert('Converted to LowerCase', 'success')

    }
    const handleSenCLick = () => {
        let newText = Text.charAt(0).toUpperCase() + Text.slice(1).toLowerCase();
        setText(newText);
        props.showAlert('Converted to Sentense Case', 'success')
      }
    
    const handleHEadCLick = () => {
        let newText = Text
            .toLowerCase()
            .split(" ")
            .map(word => word.charAt(0).toUpperCase() + word.slice(1))
            .join(" ");
        setText(newText);
        props.showAlert('Converted to Heading Case', 'success')

    }
    const handleCopyText = ()=> {
      let text = document.getElementById('myBox')
      text.select();
      navigator.clipboard.writeText(text.value);
      props.showAlert('Copy to clipboard', 'success')

    }
    
    const handleClearText = ()=> {
        let newText = "";
        setText(newText);
        props.showAlert('Clear Text', 'success')

    }
    const handleExtraSpaces = () => {
      let spaceText = Text.split(/[ ]+/)
      setText(spaceText.join(" "))
      props.showAlert('Extra spaces remove', 'success')

    }
    const handleOnChange = (event)=> {
        setText(event.target.value)

    }

  const [open, setOpen] = useState(false);

    const [Text, setText] = useState("");

  return (
    <>
  <div className="mb-3" style={{color: props.mode=== 'dark'? 'white':'black'}}>
    <label htmlFor="TextArea" className="form-label">Example textarea </label>
    <textarea className="form-control" style={{backgroundColor: props.mode=== 'dark'? 'grey':'white',color: props.mode=== 'dark'? 'white':'black'}} value={Text} onChange={handleOnChange} id="myBox" rows="8"></textarea>
    <div>
    <div className='my-3' style={{ position: 'relative', display: 'inline-block' }}>
      <button className="btn btn-info "  onClick={() => setOpen(!open)}>
        cases
      </button>

      <div
        style={{
          position: 'absolute',
          top: '40px',
          left: '0',
          background: 'white',
          border: '1px solid #ccc',
          padding: '10px',
          boxShadow: '0 4px 8px rgba(0,0,0,0.1)',
          borderRadius: '4px',
          opacity: open ? 1 : 0,
          transform: open ? 'translateY(0)' : 'translateY(-10px)',
          pointerEvents: open ? 'auto' : 'none',
          transition: 'all 0.3s ease'
        }}
      >
    <button style={{fontSize: '13px' }} className="btn btn-primary " onClick={handleUpCLick}>Uppercase</button>
    <button style={{ fontSize: '13px' }} className="btn btn-primary my-1 " onClick={handlelowCLick}>Lowercase</button>
    <button style={{ fontSize: '13px' }} className="btn btn-primary  " onClick={handleSenCLick}>Sentense case</button>
    <button style={{ fontSize: '13px' }} className="btn btn-primary my-1 " onClick={handleHEadCLick}>Heading Case</button>
      </div>

    </div>
    <button className="btn btn-primary my-2 mx-2" onClick={handleClearText}>Clear Text</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleCopyText}>Copy Text</button>
    <button className="btn btn-primary my-2 mx-2" onClick={handleExtraSpaces}>Remove extra spaces</button>

    </div>


  </div>
  <div className="container" style={{color: props.mode=== 'dark'? 'white':'black'}}>
    <h2>Your Text summary </h2>
    <p>{Text.trim().length > 0 ? Text.trim().split(/\s+/).length : 0} words and {Text.length} characters</p>
    <p>{0.008 * (Text.trim().length > 0 ? Text.trim().split(/\s+/).length : 0)} minutes read</p>
    <h3>{Text.length>0?Text: 'Enter Something to preview it here'}</h3>
    </div></>
  )
}


