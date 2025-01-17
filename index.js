function fetchBooks() {
  // To pass the tests, don't forget to return your fetch!
  return fetch("https://anapioficeandfire.com/api/books")
    .then((response) => response.json())  // Convert the response into JSON
    .then((books) => renderBooks(books));  // Pass the books data to renderBooks function
}

function renderBooks(books) {
  const main = document.querySelector('main');
  books.forEach(book => {
    const h2 = document.createElement('h2');
    h2.innerHTML = book.name;  // Set the book title as the content of h2
    main.appendChild(h2);      // Append the h2 element to the main container
  });
}

// Wait for the DOM content to be fully loaded, then fetch the books
document.addEventListener('DOMContentLoaded', function() {
  fetchBooks();
});
