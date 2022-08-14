const title = document.querySelector('#title');
const author = document.querySelector('#author');
const pages = document.querySelector('#pages');
const form = document.querySelector('#form');
const container = document.querySelector('.container');

const bookCard = document.querySelector('.book-card');
const bookCardClone = bookCard.cloneNode(true);

const submit = document.querySelector('[type=submit]');
form.addEventListener('submit', addBookToLibrary);



const addBook = document.querySelector('.add-book');
const modalOverlay = document.querySelector('.modal-overlay');

addBook.addEventListener('click', function() {
    modalOverlay.classList.add('overlay-active');
    form.style.display = 'flex';
    });


  submit.addEventListener("click", function () {
    form.style.display = 'none';
    bookCard.style.display = 'flex';
    bookCard.style.flexDirection = 'row';
    if (bookCard.style.display === 'flex'); {
        submit.addEventListener("click", function() {
          bookCard.after(bookCardClone);
          bookCardClone.style.display = 'flex';
          bookCardClone.style.flexDirection = 'row';
        })
      }
    }
   );



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
     arrayDisplay();
     console.log(myLibrary);
      };

 //Loop through myLibrary Array and display each book on the page
 function arrayDisplay() {
  myLibrary.forEach((book) => {
    bookCard.innerHTML += "Title: " + book.title + "<br>" + "<br>";
    bookCard.innerHTML += "By: " + book.author + "<br>" + "<br>";
    bookCard.innerHTML += "Pages: " + book.pages + " pages" + "<br>" + "<br>";
  })
};

 