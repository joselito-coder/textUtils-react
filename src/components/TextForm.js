import React, { useState } from 'react'
import PropTypes from 'prop-types'

export default function TextForm(props) {

    const wordLength = () => {
        let len = text.split(' ').length
        // Check if the text is empty of ends with a space
        if (text === "" || text.endsWith(" ")) {
            // subtract one from the length
            len -= 1;
        }
        return len;
    }

    const handleUpClick = () => {
        let newText = text.toUpperCase();
        setText(newText);
        props.showAlert("The text has been converted to Uppercase!", 'success');
    }

    // function to handle if a change occurs in the textarea
    // this is important as it enables the user to input text into the textarea
    const handleOnChange = (event) => {
        setText(event.target.value);
    }

    // Function used to converte the text to lowercase
    const handleLoClick = () => {
        let newText = text.toLowerCase();
        setText(newText);
        props.showAlert("The text has been converted to Lowercase!", 'success');

    }

    // This function encrypts a plaintext into base64 encoded string
    const handleEnClick = () => {
        // Encode the plaintext using window.btoa() function
        if (!text == "") {
            let encryptedText = btoa(text)
            
            // console.log("I am working")
            // Update the text with the encrypted text
            setText(`Encrypted Text: ${encryptedText}`)
            props.showAlert("The text has been encrypted!", 'success');
        }
    }

    const handleDeClick = ()=>{
        if (!text == "") {
            setText(text.replaceAll("Encrypted Text:"," "))
            setText(text.replace(/^\s+|\s+$/g, ''))
            console.log(text)
            let decryptedText ;
            try{
                decryptedText = atob(text.replaceAll("Encrypted Text:"," "))
            }catch(e){
                console.error(e);
                props.showAlert("Invalid Cipher text entered", 'danger');
                return;

            }
            // console.log("I am working")
            // Update the text with the decrypted text
            setText(`Decrypted Text: ${decryptedText}`)
            props.showAlert("The text has been encrypted!", 'success');
        }

    }

    const handleClClick = () => {
        setText("");
        props.showAlert("The text was cleared!", 'success');
    }

    const handleCopy = () => {
        let textArea = document.getElementById('myBox');
        textArea.select();
        navigator.clipboard.writeText(textArea.value);
        props.showAlert("The text was copied to clipboard!", 'success');

    }

    const handleExtraSpaces = () => {
        let newText = text.split(/[ ]+/);
        setText(newText.join(" "));
        props.showAlert("Extra spaces removed!", "success");
    }

    // State variable to hold text
    const [text, setText] = useState("");

    const textAreaStyle = {
        backgroundColor: props.mode === 'dark' ? 'grey' : 'white',
        color: props.mode === 'dark' ? 'white' : 'black'
    }

    return (
        <>
            <div className="container">
                <div className="mb-3">
                    <label htmlFor="myBox" className="form-label"><h1>{props.heading}</h1></label>
                    <textarea className="form-control" value={text} style={textAreaStyle} onChange={handleOnChange} id="myBox" rows="8"></textarea>
                    <button onClick={handleUpClick} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Convert to Uppercase</button>
                    <button onClick={handleLoClick} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Convert to Lowercase</button>
                    <button onClick={handleEnClick} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Encrypt text</button>
                    <button onClick={handleDeClick} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Decrypt text</button>
                    <button onClick={handleClClick} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Clear text</button>
                    <button onClick={handleCopy} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Copy text</button>
                    <button onClick={handleExtraSpaces} className={`btn btn-${props.buttonColor} mx-1 my-2`}>Remove extra spaces</button>

                </div>
            </div>

            <div className="container">
                <h2>Your Text Summary</h2>
                <p>{wordLength()} Words and {text.length} Characters</p>
                <p>{0.008 * wordLength()} Minutes Read</p>

                <div className="my-3"></div>
                <h3>Preview</h3>
                <p>{text}</p>

            </div>
        </>
    )
}

TextForm.propTypes = {
    heading: PropTypes.string.isRequired,

}

TextForm.defaultProps = {
    heading: "Enter heading here"
}