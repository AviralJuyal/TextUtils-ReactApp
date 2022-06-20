import React, {useState} from 'react'

export default function TextArea(props) {
  const [text, setText] = useState('');
  

  const upperCaseClick = ()=>{
        props.showAlert('Converted to Upper case' , 'success');
        const newText = text.toUpperCase();
        setText(newText);
  }
  
  const lowerCaseClick = ()=>{
        props.showAlert('Converted to Lower case' , 'success');
        const newText = text.toLowerCase();
        setText(newText);
  }

  const clearClick = ()=>{
    props.showAlert('Cleared Text !!', 'success');
    const newText = '';
    setText(newText);
  }
  

  const copyTextClick = ()=>{
    props.showAlert('Copied Text !!' , 'success');
    navigator.clipboard.writeText(text);
 
  }

  const extraSpaceClick = ()=>{
    props.showAlert('Removed extra spaces !', 'success');
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const onChangeFunc = (event)=>{
    
    setText(event.target.value);
  }

  function countWords(str) {
    let arr2 = str.split(/[\s ]+/);
    return arr2.filter(word => word !== '').length ;
  }
  return (
    <>
    <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
            
        <h1>{props.heading}</h1>
        <textarea className = {`form-control text-${props.mode === 'dark'?'light':'dark'} bg-${props.mode}`} spellCheck="true"  name="text" value={text} onChange={onChangeFunc} id="textInput" cols="100" rows="10"></textarea>
        <button disabled = {text.length === 0} className='btn btn-primary my-2 mx-1 my-1' onClick={upperCaseClick}>To Upper Case</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={lowerCaseClick}>To Lower Case</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear Text</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={copyTextClick}>Copy Text</button>
        <button disabled = {text.length === 0} className='btn btn-primary mx-1 my-1' onClick={extraSpaceClick}>Remove Extra Spaces</button>

    </div>
    <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h2>Your text Summary</h2>
        <p>{countWords(text)} words {text.length} characters</p>  
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    </>
  )
}
