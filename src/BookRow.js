import React from "react";

function BookRow(props) {
  const book = props.book;
  const authors = book.authors.map(author => (
    <div key={author.id}>
      <a href={`/authors/${author.id}`}>{author.name}</a>
    </div>
  ));
  return (
    <tr>
      <td>{book.title}</td>
      <td>{authors}</td>
      <td>
        <a href={`/books/${book.color}`}>
          <button className="btn" style={{ backgroundColor: book.color }} />
        </a>
      </td>
    </tr>
  );
}

export default BookRow;
