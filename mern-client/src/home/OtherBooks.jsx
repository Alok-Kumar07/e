// eslint-disable-next-line no-unused-vars
import React, { useEffect, useState } from 'react'
import BookCards from '../Components/BookCards';

const OtherBooks = () => {
    const [books, setBooks] = useState([]);

    useEffect(() =>{
        fetch("http://localhost:5000/all-books").then(res => res.json()).then(data => setBooks(data.slice(3,9)))
    },[])
  return (
    <div>
        <BookCards books={books} headlin="Other Books"/>
    </div>
  )
}

export default OtherBooks