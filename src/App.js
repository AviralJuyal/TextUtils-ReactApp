import { useState } from 'react';
import './App.css';
import Navbar from './components/Navbar';
import Textarea from './components/TextArea';
import React from 'react';
import Alert from './components/Alert';


function App() {
  const [mode, setmode] = useState('light');
  const [alert, setalert] = useState(null);

  const showAlert = (message , type)=>{
    setalert({
      msg : message,
      type : type
    });

    setTimeout(() => {
      setalert(null);
    }, 1500);
  }

  const toggleMode = ()=>{
    if(mode === 'light'){
      setmode('dark');
      document.body.style.backgroundColor = '#333333';
      showAlert('Dark Mode is Enabled !' , 'success');
    }
    else{
      setmode('light');
      document.body.style.backgroundColor = 'white';
      showAlert('Light Mode is Enabled !' , 'success');

    }
  }

  return (
    <>


    <Navbar title="TextUtils" about = "About Us" mode={mode} toggleMode = {toggleMode}></Navbar>
    <div style={{height : '40px'}}>
      <Alert alert = {alert}></Alert>
    </div>
      <div className="container my-3">
      <Textarea showAlert= {showAlert} heading ="Enter Your Text Here" mode={mode}></Textarea>
   
      </div>


    </>
  );
}


export default App;
