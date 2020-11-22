import React from 'react'
import './bookList.css'

export default function Booklist(props) {
  const bookResults = props.bookResults.bookResults;
  const books = bookResults.map((book, i) => {
    const bookInfo = book.volumeInfo;
    return <li key={i} className="book">
      <img className="book__img" src={bookInfo.imageLinks.thumbnail} alt={bookInfo.title} />
      <h2 className="book__title">{bookInfo.title}</h2>
  <p className="book__description">{bookInfo.description}</p>
      </li>
  })

  return (
    <ul className="bookList">
      {books}
    </ul>
  );
}