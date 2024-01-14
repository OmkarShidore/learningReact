import { useState } from "react";

function BookEdit({ book, onSubmitEdit }) {
    const [title, setTitle] = useState(book.title);

    const handleChange = (event) => {
        setTitle(event.target.value);
    };

    const handleSaveClick = (event) => {
        event.preventDefault();
        onSubmitEdit(book.id, title);
    };

    return (
        <div>
            <form onSubmit={handleSaveClick} className="book-edit">
                <input
                    value={title}
                    onChange={handleChange}
                    className="input"
                />
                <button className="button is-primary">Save</button>
            </form>
        </div>
    );
}

export default BookEdit;
