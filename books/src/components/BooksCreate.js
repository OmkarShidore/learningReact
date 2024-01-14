import { useState } from "react";

function BookCreate({ onCreate }) {
    const [title, setTitle] = useState("");

    const handleSubmit = (event) => {
        event.preventDefault();
        onCreate(title);
        setTitle("");
    };

    const handleChange = (event) =>{
        setTitle(event.target.value);
        console.log(event.target.value);
    };

    return (
    <div className="book-create">
        <form onSubmit={handleSubmit}>
            <label>Add a book</label>
            <input className="input" value={title} onChange={handleChange}/>
            <button className="button" >Create!</button>
        </form>
    </div>
    );
}

export default BookCreate;
