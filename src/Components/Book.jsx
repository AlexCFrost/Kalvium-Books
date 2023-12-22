import { useState, useEffect } from 'react';
import axios from 'axios';
import Head from './Head';
import '../App.css';

function Book() {
  const [books, setBooks] = useState([]);
  const [error, setError] = useState(null);
  const [searchData, setSearchData] = useState('');

  useEffect(() => {
    axios
      .get("https://reactnd-books-api.udacity.com/books", {
        headers: { Authorization: 'whatever-you-want' },
      })
      .then((response) => {
        setBooks(response.data.books);
      })
      .catch((err) => {
        if (err.response && err.response.status === 404) {
          setError("Books Not Found");
        } else {
          setError("An error occurred");
        }
      });
  }, []);

  const filterBooks = books.filter(book => book.title.toLowerCase().includes(searchData.toLowerCase()));

  return (
    <div className="container">
      {error && <p className="error">Error: {error}</p>}
      <div>
      <Head setSearchData={setSearchData} />
      </div>
      {(searchData ? filterBooks : books).map((book) => (
        <div key={book.id} className="book">
          <h1>{book.title}</h1>
          <img src={book.imageLinks.thumbnail} alt={book.title} />
          <div className='ptag'>
          <p>{book.averageRating? book.averageRating: '4'}&#9733;</p>
          <p>Free</p>
          </div>
        </div>
      ))}
    </div>
    
  );
}

export default Book;
