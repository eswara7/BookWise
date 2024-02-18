import React, { useEffect, useState } from 'react'
import BookCard from '../components/BookCard'
  

 
const FavouriteBook = () => {
  const [books,setBooks] = useState([])

  useEffect(()=>{
    fetch("http://localhost:3000/all-books").then(res=>res.json()).then(data=>setBooks(data))
  },[])
  return (
    <div><BookCard books={books} headline ="Best sellers"/></div>
  )
}

export default FavouriteBook