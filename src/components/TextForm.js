import React, {useState} from 'react'


export default function TextForm(props) {
    const handleUpClick = () => {
        // console.log("Uppercaser was clicked." + text);
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("Converted to Uppercase!", "success");
    }
    const handleLowClick = () => {
        // console.log("Uppercaser was clicked." + text);
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("Converted to Lowercase!", "success");


    }
    const handleOnChange = (event) => {
        // console.log("On Change.");
        setText(event.target.value);
    }
    const handleClearClick = () => {
        let newText = "";
        setText(newText);
        props.showAlert("Clear all text from box!", "success");

    }
    const handleCopy = () => {
        var text =document.getElementById("myBox");
        text.select();
        navigator.clipboard.writeText(text.value);
        props.showAlert("Text Copy!", "success");

    }
    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Removed eaxtra space from text!", "success");

    }
    const [text, setText] = useState('');
    // setText("new text");

    return ( 
        <>
            <div className="container" style={{color: props.mode ==='dark'?'white':'black'}}>
                <h2 >{props.heading}</h2>
                <div className="mb-3">
                    <textarea className="form-control"  value={text} id="myBox" onChange={handleOnChange} style={{backgroundColor: props.mode ==='dark'?'gray':'white', color: props.mode ==='dark'?'white':'black'}} rows="8"></textarea>
                </div>
                <button className="btn btn-primary mx-1" onClick={handleUpClick} >Conver to Uppercase</button>
                <button className="btn btn-primary mx-1" onClick={handleLowClick} >Conver to Lower</button>
                <button className="btn btn-primary mx-1" onClick={handleClearClick} >Clear Text</button>
                <button className="btn btn-primary mx-1" onClick={handleCopy} >Copy Text</button>
                <button className="btn btn-primary mx-1" onClick={handleExtraSpaces} >Remove Extra Space</button>
            </div>
            <div className="container my-3" style={{color: props.mode ==='dark'?'white':'black'}} >
                <h2>Your Text Summary</h2>
                <p>{text.split(" ").length} words and {text.length} chracters</p>
                <p>{0.008 * text.split(" ").length} its take time to read Text </p>
                <h2>Preview</h2>
                <p>{text.length > 0 ? text : 'Enter Somthing in textbox above to Preview it here'}</p>
            </div>
        </>
    )
}