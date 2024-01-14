import { useState } from "react";
import BookCreate from "./components/BooksCreate";
import BookList from "./components/BooksList";

function App() {
    const [books, setBooks] = useState([]);

    const editBookById = (id, newTitle) => {
        const updatedBooks = books.map((book) => {
            if (book.id===id){
                return {...book, title:newTitle};
            }
            return book;
        });
        setBooks(updatedBooks);
    };

    const deleteBookById = (id) => {
        const updatedBooks = books.filter((book)=>{
            return book.id!==id;
        });
        setBooks(updatedBooks);
    };

    const createBook = (title) => {
        const updatedBooks = [
            ...books,
            {
                id: Math.round(Math.random() * 9999),
                title,
            }
        ];
        setBooks(updatedBooks);
        console.log("Books title:", title);
    };

    return (
        <div>
            <BookList onShow={books} onDelete={deleteBookById} onEdit={editBookById}/>
            <BookCreate onCreate={createBook} />
        </div>
    );
}

export default App;
