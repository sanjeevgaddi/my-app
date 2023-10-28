import React from 'react'
import ReactDOM from 'react-dom/client'

import './index.css'
import { books } from './books'
import Book from './Book'

const BookList = () => {
  const getBook = (id) => {
    const book = books.find((book) => book.id === id)
  }
  return (
    <>
      <h1>amazon best sellers</h1>
      <section className="booklist">
        {books.map((book, index) => {
          return (
            <Book {...book} key={book.id} getBook={getBook} number={index} />
          )
        })}
      </section>
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById('root'))

root.render(<BookList />)

// const handleFormInput = (e) => {
// console.log(e)
// console.log(e.target)
//   console.log(e.target.name)
//   console.log(e.target.value)
// }
// const handleButtonClick = () => {
//   alert('handle button click')
// }

// const handleFormSubmisssion = (e) => {
//   e.preventDefault()
//   console.log('form submitted')
// }

// const EventExamples = () => {
//   return (
//     <section>
//       <form onSubmit={handleFormSubmisssion}>
//         <h2>Typical Form</h2>
//         <input
//           type="text"
//           name="event"
//           onChange={handleFormInput}
//           style={{ margin: '1rem' }}
//         />
//         <button type="submit">Submit</button>
//         <div>
//           <button onClick={handleButtonClick} type="button">
//             Click Me
//           </button>
//         </div>
//       </form>
//     </section>
//   )
// }
