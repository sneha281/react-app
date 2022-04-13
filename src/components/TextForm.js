import React ,{useState} from 'react'

import { Form , Button} from "react-bootstrap";

export default function TextForm (props){
    const handleUpClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText = text.toUpperCase();
        setText(newText);
    }
    const handleloClick = ()=>{
        //console.log("uppercase was clicked" + text);
        let newText1 = text.toLowerCase();
        setText(newText1);
    }
    const resetme = ()=>{
      let newtext = '';
      setText(newtext);
    }

    const handleOnChange = (event)=>{
       // console.log("On Change");
        setText(event.target.value);
    }
    const [ text,setText] = useState('Enter text here');

    return (

        <>
            <div className="container">
            <h1>Welcome to Our Website </h1>

                <Form.Control
                    as="textarea"


                    value = {text}
                    onChange={handleOnChange}
                    style={{ height: '500px' }}
                />

            <Button variant="primary my-3 mx-2"  onClick={handleUpClick}>Convert to Upper Case</Button>
                <Button variant="primary my-3 mx-2"  onClick={handleloClick}>Convert to Lower Case</Button>
                <Button variant="primary my-3 mx-2"   onClick={resetme}>Undo Changes</Button>


        </div>
        <div className="container my-2">
            <h1>Your text summary</h1>
            <p>{text.split(" ").length} words and {text.length} characters</p>
            <p>{0.03 * text.split(" ").length} Minutes reads</p>
            <h2>Preview</h2>
            <p>{text}</p>

        </div>
  

        </>

    )
}