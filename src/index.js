import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'

const BookList = () => {
  return (
    <section className="booklist">
      <Book />
      <Book />
      <Book />
      <Book />
    </section>
  )
}

const Book = () => {
  const title = 'Forever Strong: A New, Science-Based Strategy for Agingggggggg'
  const author = 'Dr. Gabrielle Lyon'
  return (
    <article className="book">
      <img src="./images/book-1.jpg" alt="{title}" />,<h2>{title}</h2>,
      <h4>{author}</h4>
    </article>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)
