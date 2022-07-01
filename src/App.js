import logo from './logo.svg';
import './App.css';
import Navbar from './components/Navbar';
import TextForm from './components/TextForm';
import { useState } from 'react';

function App() {

 const [mode, setMode]=useState('warning');
 const [cColor, nColor]=useState('dark') ;
const toggleMode=()=>{
  if(mode==='warning'){
    setMode('success');
   document.body.style.backgroundColor='gray';
   nColor('success');
  }
  else{
    setMode('warning'); 
    document.body.style.backgroundColor='white';
    nColor('warning');
  }
}

  return (
   <>
 <Navbar brand="Mr. suthar" tab1="Blog" tab2="Skills" mode={mode} toggleMode={toggleMode}/>
 <div className="container  my-4">
 <TextForm  heading="Enter your text Below" mode={mode}/>
 </div>

   </>
  );
}

export default App;
