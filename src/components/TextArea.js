import React, {useState} from 'react'

export default function TextArea(props) {
  const [text, setText] = useState('');
  

  const upperCaseClick = ()=>{
    // console.log("upper case");
    if(text===''){
        props.showAlert('Empty !! Cannot convert to upper case' , 'danger');

    }
    else{

        props.showAlert('Converted to Upper case' , 'success');
        const newText = text.toUpperCase();
        setText(newText);
    }
  }
  
  const lowerCaseClick = ()=>{ 
    if(text === ''){
        props.showAlert('Empty !! Cannot converted to Lower case' , 'danger');

    }
    else{

        props.showAlert('Converted to Lower case' , 'success');
        const newText = text.toLowerCase();
        setText(newText);
    }
  }

  const clearClick = ()=>{
      // console.log("upper case");
    props.showAlert('Cleared Text !!', 'success');
    
    const newText = '';
    setText(newText);
  }
  
  // let i=0;
  // const fontChangerClick = ()=>{
  //   if(text === ''){
  //       props.showAlert('Empty ! Cannot change font' , 'danger');
  //       return;
  //   }
  //   // let i = Math.floor(Math.random()*fonts.length);
  //   const fonts = ['Comic Sans MS','Tahoma' , 'Arial Black' ,'Times New Roman'];
  //   document.getElementById('textInput').style.fontFamily= `${fonts[i]}`;
  //   // console.log(fonts[i]);
  //   if(i<fonts.length-1)
  //   i++;
  //   else
  //   i=0;
  //   // props.showAlert('Font Changed !' , 'success');
  //   // setText(newText);
  // }


  const copyTextClick = ()=>{
    props.showAlert('Copied Text !!' , 'success');

    const copyText = document.getElementById('textInput');
    copyText.select();
    navigator.clipboard.writeText(copyText.value);
    // console.log(copyText.value);
  }

  const extraSpaceClick = ()=>{
    props.showAlert('Removed extra spaces !', 'success');
    let newText = text.split(/[ ]+/);
    setText(newText.join(" "))
  }

  const onChangeFunc = (event)=>{
    // console.log('onChange ');
    
    setText(event.target.value);
  }

  function countWords(str) {
    // let arr = str.split(' ');
    let arr2 = str.split(/[\s ]+/);
    let ans =  arr2.filter(word => word !== '').length ;
    return ans;
  }
  return (
    <>
    <div className={`container text-${props.mode === 'dark'?'light':'dark'}`}>
            
        <h1>{props.heading}</h1>
        <textarea className = {`form-control text-${props.mode === 'dark'?'light':'dark'} bg-${props.mode}`} spellCheck="true"  name="text" value={text} onChange={onChangeFunc} id="textInput" cols="100" rows="10"></textarea>
        <button className='btn btn-primary my-2 mx-1 my-1' onClick={upperCaseClick}>To Upper Case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={lowerCaseClick}>To Lower Case</button>
        <button className='btn btn-primary mx-1 my-1' onClick={clearClick}>Clear Text</button>
        {/* <button className='btn btn-primary mx-1 my-1' onClick={fontChangerClick}>Font</button> */}
        {/* <button className='btn btn-primary mx-1' onClick={fontSizeIncClick}>Font Size (increase)</button> */}
        {/* <button className='btn btn-primary mx-1' onClick={fontSizeDecClick}>Font Size (decrease)</button> */}
        <button className='btn btn-primary mx-1 my-1' onClick={copyTextClick}>Copy Text</button>
        <button className='btn btn-primary mx-1 my-1' onClick={extraSpaceClick}>Remove Extra Spaces</button>

    </div>
    <div className={`container my-3 text-${props.mode === 'dark'?'light':'dark'}`}>
        <h2>Your text Summary</h2>
        <p>{countWords(text)} words {text.length} characters</p>  
        <h2>Preview</h2>
        <p>{text}</p>
    </div>
    {/* text===''?text.split(' ').length-1:text.split(' ').length */}
    </>
  )
}
