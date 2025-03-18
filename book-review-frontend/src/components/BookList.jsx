import React, { useEffect, useState } from 'react';
import axios from 'axios';
import BookCard from './BookCard';

const BookList = () => {
  const [books, setBooks] = useState([]);

  useEffect(() => {
    axios.get('http://localhost:5000/books')
      .then(response => setBooks(response.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div className="flex flex-wrap justify-center p-6 bg-gradient-to-r from-gray-900 to-gray-800 min-h-screen">
      {books.map(book => (
        <BookCard key={book._id} book={book} />
      ))}
    </div>
  );
};

export default BookList;
