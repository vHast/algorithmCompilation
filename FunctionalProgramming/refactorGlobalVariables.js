// The global variable
const bookList = ["The Hound of the Baskervilles", "On The Electrodynamics of Moving Bodies", "Philosophiæ Naturalis Principia Mathematica", "Disquisitiones Arithmeticae"];

// Change code below this line 

function add(bookList, bookName) {
  let bookArr = bookList;
  bookArr.push(bookName);
  return bookArr;

  // Change code above this line
}

//Change code below this line 

function remove(bookList, bookName) {
  let bookTitle = bookList;
  const book_index = bookTitle.indexOf(bookName);
  if (book_index >= 0) {
    
    bookList.splice(book_index, 1);
    return bookTitle;

    // Change code above this line
  }
}