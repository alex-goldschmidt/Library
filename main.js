const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const form = document.querySelector('#form');
const container = document.querySelector('.container');
const bookWrapper = document.querySelector('.books-wrapper');

const remove = document.querySelector('#remove');
remove.addEventListener('click', function(){
  myLibrary.pop(bookCard);
  myLibrary.splice(bookCard, 1);
  bookCard.style.display = 'none';
})

let bookCard = document.querySelector('.book-card');

const submit = document.querySelector('[type=submit]'); //submit book to library
form.addEventListener('submit', addBookToLibrary);



const addBook = document.querySelector('.add-book'); //fill out form to submit book

addBook.addEventListener('click', function() {
    form.style.display = 'flex';
  });


//store Book data in this array
let myLibrary = [

];

submit.addEventListener("click", function () {
  form.style.display = 'none';
  bookCard.style.display = 'flex';
  }
);


function Book (title, author, pages) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.info = function() {
  }
};

//create custom book data through input boxes in html form
function addBookToLibrary(e) {
    e.preventDefault();
    const newBook = new Book(title.value, author.value, pages.value);
    myLibrary.push(newBook);
    arrayDisplay(myLibrary, bookWrapper);
    console.log(myLibrary);
    this.reset();
      };

 //Loop through myLibrary Array and display each book on the page
function arrayDisplay() {
 const book = myLibrary.at(-1); //gets last value of array
  const bookCardList = document.querySelectorAll('.book-card');
  const card = Object.values(bookCardList).pop(); //removes--> returns last array element


  card.innerHTML += "Title: " + book.title + "<br>" + "<br>";
  card.innerHTML += "By: " + book.author + "<br>" + "<br>";
  card.innerHTML += "Pages: " + book.pages + " pages" + "<br>" + "<br>" + "<hr>"; 
};

  