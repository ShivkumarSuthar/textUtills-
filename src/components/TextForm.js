import React, {useState} from 'react';


export default function TextForm(props) {
  const [text, setText] = useState("welcome to my new exercise");

  // styling 
  const [myStyle , newStyle]=useState({
    color:'black',
    backgrounColor:'white'
  });
  const [btn, newBtn]=useState('Dark');

// -----------------

  const handleUpText=()=>{
    // console.log("you clicked");
    setText(text.toUpperCase());
  }

  const handleOnChange=(event)=>{
    // console.log("changed");
    setText(event.target.value);
  }
const handledownText=()=>{
  // console.log("press");
  setText(text.toLowerCase());
}
const handleClear=()=>{
  var newText='';
  setText(newText);
}


const handleBg=()=>{
if(myStyle.color=='white'){
  newStyle({
    color:'black',
    backgroundColor:'white'
  });
  newBtn('dark');

}
else{
  newStyle({
    color:'white',
    backgroundColor:'black'
  });
  newBtn('light');
}
}

  return (

    <div className='container' style={myStyle}>
   
    <h2>{props.heading}</h2>
<div className="my-3 mb-4">
  <textarea value={text} className="form-control" onChange={handleOnChange} id="exampleFormControlTextarea1" rows="7"></textarea>
  <button onClick={handleUpText} className={`btn btn-${props.mode=='warning'?'success':'warning'} my-4`}>Uppercase</button>
  <button onClick={handledownText} className={`btn btn-${props.mode=='warning'?'success':'warning'} mx-4`}>LowerCase</button>
  <button onClick={handleClear} className={`btn btn-${props.mode=='warning'?'success':'warning'} mx-4`}>Clear</button>
  <button onClick={handleBg} className={`btn btn-${props.mode=='warning'?'success':'warning'} `}>{btn}</button>
</div>

<div className='my-3'>
  <h4>Text Summary</h4>
  <p>It consist of {text.split(" ").length} words & {text.length} characters and It will take {0.008 * text.split(" ").length} Minutes to read...</p>
  <h4>Preview</h4>
  <p>{text}</p>
</div>

</div>
  )
}
