import React, {useState} from 'react'

export default function TextForm(props) {
    const handleUpClick=()=>{
        console.log("Uppercase was clicked" + text);
        let newText=text.toUpperCase();
        setText(newText)
    }
    const handleLowClick=()=>{
        console.log("LowerCase was clicked" + text);
        let newText1 = text.toLowerCase();
        setText(newText1)
    }
    const handleClearClick=()=>{
        let Clear ="";
        setText(Clear)
    }
    const handleSpeakClick=()=>{
        let Speak=new SpeechSynthesisUtterance();
        Speak.text=text;
        window.speechSynthesis.speak(Speak);
    }
    const handleOnChange =(event)=>{
        console.log("On change");
        setText(event.target.value)
    }
    const[text , setText]=useState("")
  return (
    <>
    <div className='container heading'>
        <h1>{props.heading}</h1>
      <div className="mb-3 ">
            <textarea className="form-control" value={text} onChange={handleOnChange}id="exampleFormControlTextarea1" rows="7"></textarea>
            <button className="btn btn-danger my-3" onClick={handleUpClick}> Make UpperCase</button>
            <button className="btn btn-danger m-3" onClick={handleLowClick}> Make LowerCase</button>
            <button className="btn btn-danger m-3" onClick={handleClearClick}> Clear All</button>
            <button className="btn btn-danger m-3" onClick={handleSpeakClick}> Listen</button>
        </div>
    </div>
    <div className="container summary my3">
        <h1>Your Text Summary</h1>
        <p>{text.split(" ").length} words and {text.length} Characters</p>
        <p>{0.008 * text.split(" ").length} Minutes read</p>
        <h2>Preview</h2>
        <p>{text}</p>
    </div>

    </>
  )
}
