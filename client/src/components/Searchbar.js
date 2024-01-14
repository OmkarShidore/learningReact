import { useState } from "react";

function Searchbar({ onSubmit }) {
    const [inputText, setInputText] = useState("");

    const handleFormSubmit = (event) => {
        // Take user id from input text
        event.preventDefault();
        const requestPayload = { userId: inputText };
        onSubmit(requestPayload);
        console.log("Button Cliked");
    };

    const handleTextInput = (event) => {
        setInputText(event.target.value);
        console.log(inputText);
    };

    return (
        <div>
            <form onSubmit={handleFormSubmit}>
                <input value={inputText} onChange={handleTextInput} />
            </form>
        </div>
    );
}

export default Searchbar;
