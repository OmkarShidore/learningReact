import BookShow from "./BooksShow";

function BookList({onShow, onDelete, onEdit}){
    console.log(onShow);

    const renderBooks = onShow.map((book)=>{
        return (
            <BookShow book={book} key={book.id} onDelete={onDelete} onEdit={onEdit}/>
        );
    });

    return (
        <div>
            {renderBooks}
        </div>
    );
}

export default BookList;