const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const form = document.querySelector('#form');
const container = document.querySelector('.container')
form.addEventListener('submit', addBookToLibrary);

const addBook = document.querySelector('.add-book');
const modalOverlay = document.querySelector('.modal-overlay');

addBook.addEventListener('click', function() {
    modalOverlay.classList.add('overlay-active');
    form.style.display = 'flex';
});



//store Book data in this array
let myLibrary = [

];

function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
  }
};

//create custom book data through input boxes in html form
function addBookToLibrary() {
    const newBook = new Book(title.value, author.value, pages.value);
     myLibrary.push(newBook);
     console.log(myLibrary);
      };

 //Loop through myLibrary Array and display each book on the page

