import React from 'react';
import BookList from '../components/BookList';

const Home = () => {
  return (
    <div>
      <h1 className="text-3xl text-center text-white py-6">Book Review Platform</h1>
      <BookList />
    </div>
  );
};

export default Home;
